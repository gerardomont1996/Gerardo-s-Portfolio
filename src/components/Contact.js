
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'
import Header from './Header'


const Contact = () => {
    return (
        <>       
         <div className='App'>
            <Header/>
         </div>
        <div className='contact'>
            
          
            <div className="inputs">
                <h1>Contact Me</h1>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
        </div>
        </>
    )
}

export default Contact
