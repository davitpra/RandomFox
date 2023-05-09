import Head from 'next/head'
import { NextPage } from 'next';
import { RandomFox } from '@/components/RandomFox'

const randomNumber = () => Math.floor(Math.random() * 122) + 1;

const Home: NextPage = () => {
  const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;
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
        <RandomFox image ={image} alt= {`imagen de zorro ${randomNumber()}`}/>
      </main>
    </>
  )
}

export default Home;