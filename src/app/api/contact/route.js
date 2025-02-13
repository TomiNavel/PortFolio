import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
    }

    // Configurar el transporte con el SMTP de IONOS
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Opciones del correo
    const mailOptions = {
      from: `"Contacto Portfolio" <hola@tominavel.com>`, // Quien envía el correo
      to: "hola@tominavel.com", // TU CORREO donde recibirás los mensajes
      subject: "Nuevo mensaje de contacto",
      html: `
          <h2>Nuevo mensaje recibido</h2>
          <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Correo enviado correctamente" }), { status: 200 });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    return new Response(JSON.stringify({ error: "Error enviando el correo" }), { status: 500 });
  }
}
