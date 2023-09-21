import Link from 'next/link'
import { FaCar } from 'react-icons/fa'

import { footerLinks } from '@/constants'


const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200 ' >
      <div className="flex flex-wrap max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10 ">
        <div className='flex flex-col justify-start items-start gap-6 ' >
          <FaCar size={50} />
          <p className='text-base text-gray-700 ' >
            Car Koleks <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map(item => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map(link => (
                  <Link href={link.url} key={link.title} >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className='flex  flex-wrap justify-between items-center mt-10 border-t border-gray-200 sm:px-16 px-6 py-10 ' >
          <p>@2023 CarHub. All rights reserved</p>

          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms & Condition
            </Link>
          </div>
        </div>
      
    </footer>
  )
}

export default Footer