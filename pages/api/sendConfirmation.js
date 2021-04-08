import nodemailer from "nodemailer";

export default async (req, res) => {
	const { EMAIL_NAME, EMAIL_PW } = process.env;
	console.log(EMAIL_NAME, EMAIL_PW);
    const { 
        name, 
        brandName,
        email, 
        phone,
        explanation,
    } = req.body

	console.log("Here IS THE PAYLOAD", (req.body));

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: EMAIL_NAME,
			pass: EMAIL_PW,
		},
	});
    const to = [
        "webninja@thinkpro.net",
        "1996.sean.alexander@gmail.com"
    ]

	let info = {
			from: EMAIL_NAME,
			to: to,
            // cc: 'randy@thinkpro.net',
			subject: "NEW BRAND ACCELERATOR REQUEST (2.0)", // Subject line
			// text: "Hello world?", // plain text body
			html: `<div>
                <h1>New Brand Accelerator Request</h1>
                <ul>
                <li><strong>Customer's Name:</strong> ${name}</li>
                <li><strong>Brand Name:</strong> ${brandName}</li>
                <li><strong>Customer's Email:</strong> ${email}</li>
                <li><strong>Customer's Phone:</strong> ${phone}</li>
                <li><strong>Additional Comments From Customer:</strong> ${explanation}</li>
                </ul>
              </div>`,
		};
    
    await transporter.sendMail(info, (err,data) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            console.log('EMAIL SENT SUCCESSFULLY');

            res.json({success: true})
        }
    })
};