
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/About.scss'
import Header from './Header'
import me2 from './assets/me2.jpg'



const About = () => {
    return (
        <>
        <div className='App'>
            <Header/>
        </div>
        <div className='about'>


            <div className="about__container">


                <div className="about__img">
                    <img src={me2} alt="" />
                </div>


                <div className="about__content">
                    <h1>About Me</h1>
                    <p>I am Gerardo Montalvo, 25 years old looking to persuit a career as a Software Developer.
                     I am skilled with Python,Javascript,CSS and HTML. Working with computers is my pasion, being able 
                     to build a program from scratch is what motivates me to become a better developer.   </p>
                </div>



            </div>


        </div>
    </>
    )
}

export default About