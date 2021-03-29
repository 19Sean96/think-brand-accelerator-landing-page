import Head from "next/head";
import Header from "../components/Sections/Header";
import Landing from "../components/Sections/Landing";
import Details from "../components/Sections/Details";
import Summary from "../components/Sections/Summary";
import ContactForm from "../components/Sections/ContactForm";
import Footer from "../components/Sections/Footer";

import { useState, useEffect } from "react";

export default function Home() {
	const [emailSuccess, setEmailSuccess] = useState(false);

	const sendConfirmationEmail = async (data) => {
		const res = await fetch("/api/sendConfirmation", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		const response = await res.json(res);
		console.log("HERE IS THE RES FROM THE EMAIL", response);
		if (response.success) {
			setEmailSuccess(true);
		}
	};

  useEffect(() => {
    console.log("THIS IS PAGE SPEC (root)")

    if (window.ga) {
      console.log("DATA LAYER", window.dataLayer)
      if (location.hostname !== "localhost") {
        // window.ga('send', 'pageview', location.href)
        window.dataLayer.push({
          event: 'pageview',
          location: location.href
        })
      }
    }
  }, [])

	return (
		<div>
			<Head>
				<title>THINK Brand Accelerator: The place to go for brands to grow.</title>

        <meta name="description" content="The place to go for brands to grow." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Brand Accelerator" />
        <meta property="og:description" content="The place to go for brands to grow." />
        {/* <meta property="og:url" content="https://campaigns.thinkpro.net/" /> */}
        <meta property="og:image" content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png" />
        <meta property="og:image:secure_url" content="https://www.thinkpro.net/wp-content/uploads/newHomepageAllServices.png" />
        <meta property="og:image:width" content="1199" />
        <meta property="og:image:height" content="572" />

				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Header />
				<Landing />
				<Details />
				{/* <Summary /> */}
				<ContactForm sendConfirmationEmail={sendConfirmationEmail} emailSuccess={emailSuccess}/>
				<Footer />
			</main>
		</div>
	);
}
