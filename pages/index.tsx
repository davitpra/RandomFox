import Head from 'next/head'
import { NextPage } from 'next';
import { RandomFox } from '@/components/RandomFox'
import { useState } from "react";

import type { MouseEventHandler } from "react"

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
// random number from 1 to 122
const randomNumber = () => Math.floor(Math.random() * 122) + 1;

type ImageItem ={id:string, url:string}

const Home: NextPage = () => {

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    const newImageItem: ImageItem = {
      id:generateId(),
       url:`https://randomfox.ca/images/${randomNumber()}.jpg` 
      }
    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <>
      <Head>
        <title>React with TypeScript</title>
        <meta name="description" content="To go in deep of TypeScript and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='text-3xl font-bold underline'> Holaaaa Davidcito</h1>
        <button onClick={addNewFox}> Add new fox</button>
        {images.map(({id, url}) => (
          <div key={id} className="p-4">
            <RandomFox image={url} alt={`fox`}/>
          </div>
        ))}
      </main>
    </>
  )
}

export default Home;