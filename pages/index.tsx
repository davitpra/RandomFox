import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
        <h1 className='text-xs text-blue-500'> Hola Davidcito</h1>
      </main>
    </>
  )
}
