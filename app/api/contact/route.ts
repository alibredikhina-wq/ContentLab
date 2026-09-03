import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail =
      process.env.CONTACT_EMAIL || "ali.bredikhina@gmail.com";

    if (!apiKey) {
      console.error("CONTACT API: RESEND_API_KEY отсутствует");

      return Response.json(
        {
          success: false,
          message: "RESEND_API_KEY не найден",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name || "").trim();
    const contact = String(body.contact || "").trim();
    const projectType = String(body.projectType || "").trim();
    const budget = String(body.budget || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !contact) {
      return Response.json(
        {
          success: false,
          message: "Заполните имя и контакт.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const emailResult = await resend.emails.send({
      from: "ContentLab <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `Новая заявка с сайта ContentLab — ${
        projectType || "Проект"
      }`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #111;">
          <h1>Новая заявка с сайта ContentLab</h1>

          <p>
            <strong>Имя:</strong><br>
            ${name}
          </p>

          <p>
            <strong>Контакт:</strong><br>
            ${contact}
          </p>

          <p>
            <strong>Тип проекта:</strong><br>
            ${projectType || "Не указан"}
          </p>

          <p>
            <strong>Бюджет:</strong><br>
            ${budget || "Не указан"}
          </p>

          <p>
            <strong>Описание проекта:</strong><br>
            ${message || "Не указано"}
          </p>

          <hr>

          <p style="color: #777; font-size: 13px;">
            Заявка отправлена с сайта ContentLab.
          </p>
        </div>
      `,
    });

    console.log("RESEND RESULT:", emailResult);

    if (emailResult.error) {
      console.error("RESEND ERROR:", emailResult.error);

      return Response.json(
        {
          success: false,
          message: "Resend вернул ошибку.",
          error: emailResult.error.message,
        },
        { status: 500 }
      );
    }

    console.log(
      "EMAIL SENT SUCCESSFULLY:",
      emailResult.data?.id
    );

    return Response.json({
      success: true,
      message: "Заявка успешно отправлена.",
      id: emailResult.data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        message: "Произошла ошибка при отправке заявки.",
        error:
          error instanceof Error
            ? error.message
            : "Неизвестная ошибка",
      },
      { status: 500 }
    );
  }
}