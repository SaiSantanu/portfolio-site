import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // 1️⃣ Get data from frontend
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing fields" }),
        { status: 400 }
      );
    }

    // 2️⃣ Connect to MySQL
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // 3️⃣ Insert into database
    await connection.execute(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    await connection.end();

    // 4️⃣ Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    // 5️⃣ Success response
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );
  }
}
