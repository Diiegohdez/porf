import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./header.css"
import particlesOptions from './particles.json'

function Header() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

  return (
    <div className='Header'>
        <Particles options={particlesOptions} init={particlesInit}/>
        <div className="HeaderLeft">
            <h4>Soy un Diseñador Grafico</h4>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudiandae adipisci esse nemo laborum cupiditate ipsam sunt error
                  officia facere, fugit itaque nulla! Animi consequatur fuga, veritatis
                 eveniet magni qui quod.</span>
        </div>
        <div className="HearderRight">
            <img src='' alt='iMAGEN' className="HeaderImg"/>
        </div>
    </div>
  )
}

export default Header