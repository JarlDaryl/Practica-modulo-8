import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
      <h1>Página de contacto</h1>
      <Link href={{
            pathname:'/'
          }} >Home</Link>
    </div>
  )
}