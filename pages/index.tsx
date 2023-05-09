import Head from 'next/head'
import { RandomFox } from '@/components/RandomFox'



export default function Home() {
  return (
    <>
      <Head>
        <title>React with TypeScript</title>
        <meta name="description" content="To go in deep of TypeScript and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='text-xl text-blue-500'> Hola Davidcito</h1>
        <RandomFox />
      </main>
    </>
  )
}
