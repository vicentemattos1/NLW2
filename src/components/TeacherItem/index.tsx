import React from 'react'


import whatsappicon from '../../assets/Images/icons/whatsapp.svg'
import TeacherForm from '../../pages/TeacherForm/indedx';


import "./styles.css"

function TeacherItem(){
    return(

        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt=""/>
                <div>
                    <strong>Vicente Mattos</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Estudante de Ciência da Computação
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappicon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;