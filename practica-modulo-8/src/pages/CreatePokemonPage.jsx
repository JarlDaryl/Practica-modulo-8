import Link from 'next/link'
import React from 'react'

export default function CreatePokemonPage() {
  return (
    <div>
      <h1>Create Pokemon Page</h1>
      <Link href={{
            pathname:'/'
          }} >Home</Link>
    </div>
  )
}