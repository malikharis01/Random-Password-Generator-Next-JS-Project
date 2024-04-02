import Form from '@/components/Form'
import React from 'react'
import { Toaster } from 'react-hot-toast';
export default function page() {
  return (
    <div className=' w-screen h-screen flex justify-center pt-10'>
      <Form/>
      <Toaster/>
    </div>
  )
}
