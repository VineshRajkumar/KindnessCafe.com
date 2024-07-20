import React from 'react'
import Link from 'next/link';
const customizesFooter = () => {
  return (
    
      <footer className="bg-pink-100 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        

        <span className="block text-sm text-black sm:text-center pb-1">© 2024 <Link href="" className="hover:underline">KindnessCafe™</Link>. All Rights Reserved.</span>
        <span className="block text-sm text-blue-600 sm:text-center "> <Link href="" className="hover:underline"></Link>Created with ❤️ by Vinesh</span>
      </div>
    </footer>
    
  )
}

export default customizesFooter;
