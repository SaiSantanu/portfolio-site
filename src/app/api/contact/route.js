import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

// POST /api/contact
export async function POST(req) {
  try {
    // 1️⃣ Read request body
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    // 2️⃣ Connect to MySQL (Railway / Local compatible)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,                 // PUBLIC Railway host
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT || 3306),
      ssl: { rejectUnauthorized: false },        // REQUIRED for Railway
      connectTimeout: 10000,
    });

    // 3️⃣ Insert message into database
    await connection.execute(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await connection.end();

    // 4️⃣ Send email ONLY in production (prevents local SMTP timeout)
    if (process.env.NODE_ENV === "production") {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Gmail App Password
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "📩 New Portfolio Message",
        html: `
          <h3>New Contact Message</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b></p>
          <p>${message}</p>
        `,
      });
    }

    // 5️⃣ Success response
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
}
