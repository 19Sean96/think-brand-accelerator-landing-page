import Head from 'next/head'
import Header from '../components/Sections/Header'
import Landing from '../components/Sections/Landing'
import Details from '../components/Sections/Details'
import Summary from '../components/Sections/Summary'
import ContactForm from '../components/Sections/ContactForm'
import Footer from '../components/Sections/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Landing />
        <Details />
        <Summary />
        <ContactForm />
        <Footer />
      </main>


    </div>
  )
}
