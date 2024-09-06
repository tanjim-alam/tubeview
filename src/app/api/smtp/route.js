import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER, // SMTP username
        pass: process.env.SMTP_PASS, // SMTP password
    },
});

export async function POST(req) {
    const { name, email, orderDetails } = await req.json();

    // Setup email data
    let mailOptions = {
        from: '"Your Name" <your-email@example.com>', // sender address
        to: 'tanjim11alam@gmail.com', // list of receivers
        subject: 'New Order Received', // Subject line
        html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Order Details:</b></p>
           <pre>${JSON.stringify(orderDetails, null, 2)}</pre>`, // HTML body
    };

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email: ', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
