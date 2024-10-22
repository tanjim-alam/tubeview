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
    try {
        const body = await req.json(); // Ensure the request body is read only once
        const { contactDetails } = body;
        const { name, email, orderId, message } = contactDetails;
        // console.log(contactDetails); // Log the parsed contactUsDetails
        let adminMailOptions = {
            from: '"TubeViews" <tubeviewsmedia123@gmail.com>',
            to: 'tanjim11alam@gmail.com',
            subject: 'New Contact From TubeViews',
            html: `
                 <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
            <h1 style="text-align: center; color: #333;">New Contact Us Submission</h1>
            <p style="font-size: 16px; color: #555;">
                Dear Team,
            </p>
            <p style="font-size: 16px; color: #555;">
                You have received a new contact form submission. Please find the details below:
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #e0e0e0;">Name:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${name}</td>
                </tr>
                <tr>
                    <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #e0e0e0;">Email:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${email}</td>
                </tr>
                ${orderId ? `
                <tr>
                    <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #e0e0e0;">Order ID:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${orderId}</td>
                </tr>
                ` : ''}
                ${message ? `
                <tr>
                    <td style="font-weight: bold; padding: 8px; border-bottom: 1px solid #e0e0e0;">Message:</td>
                    <td style="padding: 8px; border-bottom: 1px solid #e0e0e0;">${message}</td>
                </tr>
                ` : ''}
            </table>
            <p style="font-size: 16px; color: #555; margin-top: 20px;">
                Best regards,<br>
                TubeViews Team
            </p>
        </div>
            `,
        };

        await transporter.sendMail(adminMailOptions);
        return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
