const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Configuración del transporte de Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Puerto recomendado para Gmail con STARTTLS
  secure: false, // No usa SSL directamente, sino STARTTLS
  auth: {
    user: process.env.EMAIL_USER || "pedroluisvp99@gmail.com",
    pass: process.env.EMAIL_PASS || "uocv eecv aaqi wubn",
  },
  tls: {
    rejectUnauthorized: false, // Evita problemas con certificados auto-firmados
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Error en conexión con SMTP:", error);
  } else {
    console.log("Servidor SMTP listo para enviar correos");
  }
});

// Ruta para enviar correos
app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Todos los campos son obligatorios" });
  }

  try {
    let info = await transporter.sendMail({
      from: `"${name}" <${email}>`, // Remitente
      to: process.env.EMAIL_USER, // Destinatario (tu correo)
      subject: "Nuevo mensaje desde el formulario de contacto",
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    });

    console.log("Correo enviado: %s", info.messageId);
    res.json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
