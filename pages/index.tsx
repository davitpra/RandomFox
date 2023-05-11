import Head from 'next/head'
import { NextPage } from 'next';
import { useState } from "react";

import type { MouseEventHandler } from "react"
import { LazyImage } from '@/components/LazyImage';


// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

import {random} from 'lodash'

// random number from 1 to 122
const randomNumber = () => random(1, 123)

const Home: NextPage = () => {

  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    const newImageItem: IFoxImageItem = {
      id:generateId(),
       url:`https://randomfox.ca/images/${randomNumber()}.jpg` 
      }
    setImages([
      ...images,
      newImageItem
    ])

    window.plausible("Singup")
  }

  return (
    <>
      <Head>
        <title>React with TypeScript</title>
        <meta name="description" content="To go in deep of TypeScript and React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>

      <main >
        <h1 className='text-3xl font-bold underline'> Holaaaa Davidcito</h1>

        <button onClick={addNewFox}> Add new fox</button>

        {images.map(({id, url}, index) => (
          <div key={id} className="p-4">
            {/* podemos definir las funcionalidades de img sin tener que definir los tipos */}
            <LazyImage 
              src={url}
              width={320}
              height="auto"
              title='Random Fox'
              onClick={()=>console.log('hay un error te tipo')}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}

      </main>
    </>
  )
}

export default Home;