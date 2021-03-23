import Head from 'next/head'
import Header from '../components/Sections/Header'
import Landing from '../components/Sections/Landing'
import Details from '../components/Sections/Details'
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
      </main>


    </div>
  )
}
