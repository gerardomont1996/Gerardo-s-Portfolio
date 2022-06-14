import React from 'react'
import './styles/Section.scss'
import tech from './assets/tech.jpg'

const Section = () => {
    return (
        <div className='section'>


            <div className="section__container">


                <div className="section__img">
                    <img src={tech} alt="" />
                </div>


                <div className="section__content">
                    <h1>My Skills</h1>
                    <p>Programming Languages - Python, Javascript, HTML, CSS</p>
                    <p>Web Technologies/Development Framework - NumPy, Pandas, Matplotlib, JSON, Flask, REACT, Bootstarp​,Heroku,REST API</p>
                    <p>Databases - PostgreSQL,MySQL,FireBase,SQLAlchemy</p>
                    <p>Tools - GitHub, VSCode, Jupyter Notebook, Postman</p>

                </div>



            </div>


        </div>
    )
}

export default Section
