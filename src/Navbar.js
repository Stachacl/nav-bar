import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [displayLinks,setDisplayLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect
    ().height
    if (displayLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [displayLinks])

  return  (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt="logo"/>
          <button className='nav-toggle'
                  onClick={() => {
                    setDisplayLinks(!displayLinks) //opposite of current state//
                   }}
           >
            <FaBars/>
          </button>
        </div>
    
    
       <div className= 'links-container' ref={linksContainerRef}> 
        <ul className='links' ref={linksRef}>
          {/* The code below - is how you can hard code links into the app but 
          to loose the ability to update it in all place by one click. So we are changing the code
          to make it addaptable - always better for the big or growing apps. 

          <li>
            <a href='#'>
              home
            </a>
          </li>
          <li>
            <a href='#'>
              about
            </a>
          </li>
          <li>
            <a href='#'>
              projects
            </a>
          </li>
          <li>
            <a href='#'>
              contact
            </a>
          </li> */}

          {links.map((link) => {
            const {id, url, text} = link;
            return <li key={id}>
              <a href={url}>
                {text}
              </a>
            </li>
          })}
           </ul>
        </div>
        
          <ul className='social-icons'>
          {social.map((socialIcon) => {
              const {id, url, icon} = socialIcon;
              return <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            })}
          </ul>

      </div>
    </nav>
  )
}

export default Navbar
