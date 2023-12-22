'use client';

import ImageGrid from './components/ImageGrid';

/*
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import girl from '@/public/images/girl.jpg'
import { Metadata } from 'next'

import { useState } from 'react'
import dynamic from 'next/dynamic';
//import HeavyComponent from './components/HeavyComponent'
{
const HeavyComponent = dynamic(() => import('./components/HeavyComponent')
  , { ssr: false, loading: () => <p>Loading...</p> });
}
*/
//import _ from 'lodash'

export default function Home() {
  //const session = await getServerSession(authOptions);
  // const [isVisable, setVisable] = useState(false);
  return (
    <main className='relative h-screen'>

       <ImageGrid/>



      {/*<Image src="https://bit.ly/react-cover" alt="girl" fill className='object-cover'sizes="(max-width:480px) 100vw,(max-wdith:768) 50vw, 33vw" />
      
      <h1 className='font-poppins'>Hello {session && <span>{session.user!.name}</span>}</h1>
      <h1 >Hello {session && <span>{session.user!.name}</span>}</h1> 
      

      <button className='btn' onClick={async () => {
        const _ = (await import('lodash')).default;
        const user = [
          { name: 'b' },
          { name: 'a' },
          { name: 'c' },

        ];
        const sortedUser = _.orderBy(user, ['name']);
        console.log(sortedUser);

      }}>show</button>
    /*isVisable && <HeavyComponent />
      <button className='btn' onClick={() => { setVisable(true) }}>show</button>
      {//<ProductCard />
      }
    */}
    </main>
  )
}

/*
export const metadata: Metadata = {
  title: 'Avatar Store',
  description: 'Created by Huabin Hou',
  openGraph: {
    title: "",
    description: ""
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');// or get data from database
  return {
    title: 'product.title',
    description: 'product.description'
  }
}
*/