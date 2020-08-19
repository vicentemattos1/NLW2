import React from 'react'
import {Link} from 'react-router-dom'

import logoImg from '../../assets/Images/logo.svg'
import landingImg from '../../assets/Images/landing.svg'

import studyIcon from '../../assets/Images/icons/study.svg'
import giveClassesIcon from '../../assets/Images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/Images/icons/purple-heart.svg'

import "./styles.css"

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="conteiner">
                <div className="logo-conteiner">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                
                <img src={landingImg}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt=""/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt=""/>
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;