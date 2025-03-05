const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Definido en .env
        pass: process.env.EMAIL_PASS, // Definido en .env
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "pedroluisvp99@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Correo enviado correctamente" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log("Servidor corriendo en puerto 3001"));
