import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./header.css"
import { Typewriter } from 'react-simple-typewriter'
import particlesOptions from './particles.json'


function Header() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

  return (
    <div className='Header'>
        <Particles options={particlesOptions} init={particlesInit}/>
        <div className="HeaderLeft">
            <h4 style={{paddingTop: '1 rem'}}>
              Soy un
              <span className="textRamdo" style={{color: 'red', fontWeight: 'bold', marginLeft: '15px', fontSize: '160%' }}>
                 <Typewriter
                   loop
                   cursor
                   cursorStyle='_'
                   typeSpeed={40}
                   deleteSpeed={60}
                   delaySpeed={1500}
                   words={['Diseñador Grafico', 'Diseñador 3D']}
                 
                 />
              </span>
            </h4>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudiandae adipisci esse nemo laborum cupiditate ipsam sunt error
                  officia facere, fugit itaque nulla! Animi consequatur fuga, veritatis
                 eveniet magni qui quod.</span>
        </div>
        <div className="HearderRight">
            
        </div>
    </div>
  )
}

export default Header