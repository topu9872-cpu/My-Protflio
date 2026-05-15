import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        
      },
      
    });
console.log('email user',process.env.EMAIL_USER);
console.log('email pass',process.env.EMAIL_PASS.length);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "topu9872@gmail.com",
      subject: `Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Email Sent",
    });
  }catch (error) {
  console.log(error);

  return Response.json({
    success: false,
    message: error.message,
  });
}
  
}