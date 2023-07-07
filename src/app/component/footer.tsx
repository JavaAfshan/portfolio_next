import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {BsTwitter,BsInstagram,BsFacebook,BsLinkedin} from 'react-icons/bs'
const Footer =()=>{
    return (
        <div className='bg-blue-50'>
<footer className="text-pink-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-pink-900">
    <div style={{
              borderRadius: '50%', overflow: 'hidden', border: '2px solid pink', boxShadow: '0 0 1rem #d91141'
            }}>
              <Image src={require("../../../public/assets/images/image.jpeg")}
                alt="AfshanYasmeen"
                width={40}
                height={100}
               
              />
            </div>
       <span className="ml-3 text-xl text-blue-900">Afshan Yasmeen</span>
    </a>
    <p className="text-sm text-pink-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-200 sm:py-2 sm:mt-0 mt-4">© 2023 AfshanYasmeen —
      <a href="https://twitter.com/knyttneve" className="text-pink-600 ml-1" rel="noopener noreferrer" target="_blank">@afshanyasmeen163</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link  target="_blank" className="text-blue-900 hover:text-pink-600" href={'https://www.facebook.com/afshan.yasmeen.796'}>
        <BsFacebook/>
      </Link>
      <Link  target="_blank" className="ml-3 text-blue-900  hover:text-pink-600" href={'https://twitter.com/AfshanYasmeen16'}>
       <BsTwitter/>
      </Link>
      <Link  target="_blank" className="ml-3 text-blue-900  hover:text-pink-600" href={'https://www.instagram.com/afshanyasmeen163/'}>
        <BsInstagram/>
      </Link>
      <Link  target="_blank" className="ml-3 text-blue-900  hover:text-pink-600" href={'https://www.linkedin.com/mwlite/mynetwork/'}>
       <BsLinkedin/>
      </Link>
    </span>
  </div>
</footer>
        </div>
    )
}
export default Footer