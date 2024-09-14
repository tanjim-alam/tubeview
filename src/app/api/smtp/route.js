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
    const { orderDetails } = await req.json();
    // console.log(orderDetails);
    // Setup email data
    const orderDetailsRows = orderDetails.products.map(product => `
       <tr>
                        <td style="border: 1px solid #ddd; padding: 8px;">
                               <span>${product.serviceName}</span>
                               <br/>
                               <div>
                               <span style="font-weight: bold; font-size:16px;">Type:</span>
                               <span style="font-size:16px;">${product.serviceType}</span>
                               </div>
                               <div>
                               <span style="font-weight: bold; font-size:16px;">Link:</span>
                               <a href="${product.url}">${product.url}</a>
                               </div>
                            
                        </td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${product.quantity}</td>
                        <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">$ ${product.price}</td>
            
                    </tr>
    `).join('');

    // Setup email data with inline styles
    let adminMailOptions = {
        from: '"Your Name" <your-email@example.com>', // sender address
        to: 'tanjim11alam@gmail.com', // list of receivers
        subject: 'New Order Received', // Subject line
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="background-color: #007BFF; padding: 16px; color: white; text-align: center;">New Order #${orderDetails.id}</h2>
            <div style="border: 1px solid #ddd; padding: 8px;">
            <div>
            <p>You've received the following order from ${orderDetails.billingDetails.name}</p>
            <div style="display: flex; align-items:center; color: #007BFF;">
            <p style="font-size:16px;">[Order #${orderDetails.id}]</p>
            <p style="font-size:16px; font-weight: bold;">(${orderDetails.date})</p>
            </div>
            <table style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #f2f2f2;">
                        <th style="border: 1px solid #ddd; padding: 8px;">Product Name</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Quantity</th>
                        <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
                    </tr>
                </thead>
                <tbody>
                ${orderDetailsRows}
                </tbody>
            </table>
            <div style="margin-top: 16px; border: 1px solid #ddd;">
                <div style="display: flex; justify-content: space-between; padding: 0px 16px;">
                    <p style="font-weight: bold; width: 50%; border-right:2px solid black; font-size:18px;">Total</p>
                    <p style="width: 50%; text-align: right; font-size:18px;">$ ${orderDetails.totalPrice}</p>
                </div>
            </div>

            <div style="margin-top: 16px;">
            <h3 style="color: #007BFF;">Billing Details</h3>
                <div style="border: 1px solid #ddd; padding:3px;">
                <div style=" padding: 0 6px;">
                    <p>${orderDetails.billingDetails.name}</p>
                    <p>${orderDetails.billingDetails.email}</p>
                    <p>${orderDetails.billingDetails.country}</p>
                </div>
                </div>
            </div>

            <div style="margin-top: 16px;">
            <h3 style="color: #007BFF;">Addition Info</h3>
                <div style="border: 1px solid #ddd; padding: 0px 10px;">
                <p>
                ${orderDetails.billingDetails.message}
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
        `, // HTML body with inline styles
    };


    let userMailOptions = {
        from: '"Your Name" <your-email@example.com>', // sender address
        to: orderDetails.billingDetails.email, // list of receivers
        subject: 'Order Successfully', // Subject line
        html: `
            <div style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: black; box-sizing: border-box; width: 100%;">
                <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);">
                    <div style="background-color: #058e3d; display: flex; justify-content: space-between; align-items: center; padding: 0px 30px;">
                        <div>
                            <span style="font-size: 30px; font-weight: bold; padding: 0px 4px;"><span style="background-color: white; color: #058e3d;">Tube</span><span style="background-color: #d33; color: white; padding: 0px 4px;">Views</span></span>
                        </div>
                        <div>
                            <p style="color: white; font-size: 20px;">Shop</p>
                        </div>
                    </div>
                    <div style="padding: 20px;">
                        <div style="text-align: center; padding: 10px 0;">
                            <h1 style="color: #4CAF50; margin: 0;">Thank You for Your Order!</h1>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center;" class="justify-center">
                            <p style="color: white; background-color: #d33; width: fit-content; padding: 10px 30px; border-radius: 40px; font-size: 20px;">
                                Order Number: <strong>#12345</strong>
                            </p>
                        </div>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Order Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <th style="text-align: left; padding: 10px; border-bottom: 1px solid #dddddd;">Product</th>
                                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">Quantity</th>
                                <th style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">Price</th>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #dddddd;">
                                    <span>Product Name 1</span><br><br>
                                    <span style="margin-top: 10px;"><strong>Type:</strong> Regular</span><br><br>
                                    <span style="margin-top: 10px;"><strong>Link:</strong> <a href="https://www.instagram.com/new-post" style="color: #058e3d; text-decoration: none;">https://www.instagram.com/new-post</a></span>
                                </td>
                                <td style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">5000</td>
                                <td style="text-align: right; padding: 10px; border-bottom: 1px solid #dddddd;">$40.00</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;"></td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd;">Subtotal:</td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd;">$40.00</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;"></td>
                                <td style="text-align: right; padding: 10px;">Shipping:</td>
                                <td style="text-align: right; padding: 10px;">$5.00</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px;"></td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd; font-weight: bold;">Total:</td>
                                <td style="text-align: right; padding: 10px; border-top: 1px solid #dddddd; font-weight: bold;">$45.00</td>
                            </tr>
                        </table>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Shipping Information</h2>
                        <p style="color: #555555;">
                            John Doe<br>
                            123 Main Street<br>
                            Anytown, USA 12345
                        </p>
                        <div style="border-bottom: 1px solid #dddddd; margin: 20px 0;"></div>
                        <h2 style="color: #4CAF50;">Need Help?</h2>
                        <p style="color: #555555;">
                            If you have any questions about your order, please contact our customer service team at <a href="mailto:support@yourstore.com" style="color: #4CAF50; text-decoration: none;">support@tubeviews.com</a>.
                        </p>
                    </div>
                    <div style="text-align: center; background-color: #d33; padding: 10px;">
                        <p style="color: white; margin: 0;">&copy; 2024 Tubeviews. All rights reserved.</p>
                    </div>
                </div>
            </div>
        `, // HTML body with inline styles
    };


    try {
        // Send mail with defined transport object
        let userInfo = await transporter.sendMail(userMailOptions);
        console.log('User message sent: %s', userInfo.messageId);

        // Send mail to the admin
        let adminInfo = await transporter.sendMail(adminMailOptions);
        console.log('Admin message sent: %s', adminInfo.messageId);

        return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email: ', error);
        return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
    }
}
