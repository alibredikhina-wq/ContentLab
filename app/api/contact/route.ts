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
          message: "Сервис отправки писем не настроен.",
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

    const { data, error } = await resend.emails.send({
      from: "ContentLab <noreply@contentlab-ai.ru>",
      to: [contactEmail],
      subject: `Новая заявка с сайта ContentLab — ${
        projectType || "Проект"
      }`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:0 auto;color:#111">

          <h1 style="margin-bottom:30px;">
            Новая заявка с сайта ContentLab
          </h1>

          <p>
            <strong>Имя:</strong><br>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>Контакт:</strong><br>
            ${escapeHtml(contact)}
          </p>

          <p>
            <strong>Тип проекта:</strong><br>
            ${escapeHtml(projectType || "Не указан")}
          </p>

          <p>
            <strong>Бюджет:</strong><br>
            ${escapeHtml(budget || "Не указан")}
          </p>

          <p>
            <strong>Описание проекта:</strong><br>
            ${escapeHtml(message || "Не указано")}
          </p>

          <hr style="margin:30px 0;border:none;border-top:1px solid #ddd">

          <p style="color:#777;font-size:13px">
            Заявка отправлена с сайта ContentLab.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return Response.json(
        {
          success: false,
          message: error.message || "Ошибка отправки письма.",
        },
        { status: 500 }
      );
    }

    console.log("EMAIL SENT:", data?.id);

    return Response.json({
      success: true,
      message: "Заявка успешно отправлена.",
      id: data?.id,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Произошла ошибка при отправке заявки.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}