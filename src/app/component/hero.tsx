import Image from 'next/image';
import { AiOutlineCloudDownload } from "react-icons/ai";
const Hero = () => {
  return (
    <div id='Hero'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
            style={{
              borderRadius: '50%', overflow: 'hidden', border: '2px solid pink', boxShadow: '0 0 1rem #d91141'
            }}>
            <Image className="object-cover object-center rounded" alt="hero" src={require("../../../public/assets/images/image.jpeg")} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
              I am Programmer
            </h1>

            <p className="mb-8 leading-relaxed text-justify">I am a skilled programmer with expertise in HTML, CSS, JavaScript, TypeScript, Python, and C++. Over the years, I have developed a strong foundation in programming concepts and methodologies, and I have used my skills to build various applications and websites.</p>
            <div className="flex justify-center">
              <a href="/assets/resume/Resume.pdf">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Download CV   <AiOutlineCloudDownload className='text-xl ml-2' /></button>

              </a>
              <a href="#Contact">
                <button className="ml-4 inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero