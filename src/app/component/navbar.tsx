import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineCloudDownload} from "react-icons/ai";
const Navbar = () => {
  return (
    <div >
      <header className="text-pink-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-pink-900 mb-4 md:mb-0">
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
          <nav 
          className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-pink-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"#Hero"} className="mr-5 hover:text-blue-900">Home</Link>
            <Link href={"#About"} className="mr-5 hover:text-blue-900">About</Link>
            <Link href={"#Skills"} className="mr-5 hover:text-blue-900">Skills</Link>
            <Link href={"#Project"} className="mr-5 hover:text-blue-900">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-900">Contact</Link>
          </nav>
          <a href="/assets/resume/Resume.pdf">
          <button
           className="inline-flex items-center text-white bg-blue-900 border-0 py-1 px-3 focus:outline-none hover:text-blue-900 hover:bg-pink-200 rounded text-base mt-4 md:mt-0" >
            Download CV 
           <AiOutlineCloudDownload className='text-xl ml-2'/>
          </button>
          </a>
        </div>
      </header>
    </div>
  )
}
export default Navbar