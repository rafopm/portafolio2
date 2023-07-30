'use client'
import { Email } from "emailjs-com";

const sendMail = async (values) => {
  try {
    // Inicializar emailjs-com con el apiKey
    Email.init(process.env.CAPTCHA_EMAILJS);

    // Enviar el correo utilizando la función send de emailjs-com
    await Email.send({
      from: "rafopm@outlook.com",
      to: values.email,
      subject: "Contact Form Submission",
      text: `
      Name: ${values.name}
      Email: ${values.email}
      Message: ${values.message}
      `,
    });

    console.log("Correo enviado exitosamente");
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};