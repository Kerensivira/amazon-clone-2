import React from 'react'
import { Link } from 'react-router-dom'
import { DivGrande, Img } from './NavStyles'

const Navbar = () => {
  return (
    <>
    <DivGrande>
       <nav>

           <div className='Logo_Amazon_PNG'>
           <Img 
        src='https://res.cloudinary.com/alexa01020304/image/upload/v1654381773/Amazon-logo-black-template-PhotoRoom_jsiv0z.png' 
        alt='logoAmazon'/> 
           </div>

           <div className="headersearch">
        <input type="text" className="headersearchinput" />
        {/* <searchIcon className="headerSearchIcon" /> */}
      </div>

      <div className="headernav">
        <Link to="/login">
          <div className="headeroption">
            <span className="headerOptionOne">Hello Guest</span>
            <span className="headerOptionTwo">Sign In</span>
          </div>
        </Link>
        </div> 
        
    </nav> 
    </DivGrande>
    
    </>
  )
}

export default Navbar