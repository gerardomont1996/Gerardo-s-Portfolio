import { Facebook, LinkedIn,GitHub} from '@material-ui/icons'
import React from 'react'
import './styles/Main.scss'
import me from './assets/me.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            <p>Hey There !</p>
                            <h1>I am Gerardo Montalvo</h1>
                            <p>Looking for a career in the tech world.</p>
                            

                            <div className="icons">
                             <a href='https://github.com/gerardomont1996'><GitHub className='icon'/></a>
                             <a href='https://www.facebook.com/gerardo.montalvo.771/'><Facebook className='icon'/></a>
                            <a href='https://www.linkedin.com/in/gerardo-montalvo-a3483522a/'><LinkedIn className='icon'/></a>
                            </div>


                    <div className="buttons">
                      <button>Hire Me</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={me} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
