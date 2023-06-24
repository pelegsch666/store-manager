'use client'

import Link from 'next/link'

const handleClick = () => {
    console.log('The link was clicked.')
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
        <h1>Welcome To Store Manager :P</h1>
        <Link href='/ItemsList' className='hover:text-blue-700 cursor-pointer'> Store Manager</Link> 
        <button className='hover:cursor-pointer hover:text-blue-700'>Edit Items</button>
        <h2>Falafel</h2>
    </main>
  )
}

