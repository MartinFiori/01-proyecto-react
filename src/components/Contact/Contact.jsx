import React, {useState} from 'react';
import './contact.css'


// Firebase
import db from "../../Firebase"
import { collection, addDoc } from 'firebase/firestore';

// React Hook Form
import { useForm } from "react-hook-form"

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [comentSent, setComentSent] = useState(false);
    let date = new Date();
    let dateArgentina = date.toLocaleDateString("es-ES");
    let horaArgentina = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    const getInfo= (dataFromForm) =>{
        let info = {dataFromForm}
        info.date = `${dateArgentina} a las ${horaArgentina}`
        // pushComment(info)
        console.log(dataFromForm)
        setComentSent(true)
        console.log(comentSent)
    }

    const pushComment = async ( comment )=>{
        const orderFirebase = collection(db, "comments");
        const order = await addDoc(orderFirebase, comment);
    }
    
    return (
        <>
            {
                !comentSent ?
                    <div className='contact-container'>
                        <form action="" className='contact-form' onSubmit={handleSubmit(data=>getInfo(data))}>
                            <h2>Contáctenos</h2>
                            <div className="inputs-Container">
                                <div className='contact-form--userInfo'>
                                    <label htmlFor="">Nombre completo:</label>
                                    <input type="text" {...register('name', {required:'Por favor, ingrese su nombre', pattern:{value:/^[a-z\u00C0-\u00FF]+\s[a-z\u00C0-\u00FF]+$/i, message:"Por favor, ingrese su nombre completo"}})} className='input'/>
                                    <p className="errorMessage">{errors.name?.message}</p>
                                    <label htmlFor="">Teléfono de contacto:</label>
                                    <input type="number" {...register('number', {required:'Por favor, ingrese su teléfono', pattern:{value:/^[\d]{8,12}/, message:"Por favor, ingrese un número válido"}})} className='input'/>
                                    <p className="errorMessage">{errors.number?.message}</p>
                                    <label htmlFor="">Correo electrónico:</label>
                                    <input type="email" {...register('email', {required:'Por favor, ingrese su correo electrónico', pattern:{value:/^[A-Z0-9._%+-]+@[A-Z.-]+\.[a-z]{2,4}$/i, message:"Por favor, ingrese un correo electrónico válido"}})} className='input'/>
                                    <p className="errorMessage">{errors.email?.message}</p>
                                </div>
                                <div className='contact-form--userComment'>
                                    <label htmlFor="">Deje su comentario:</label>
                                    <textarea className='input' {...register('comment', {required:'Por favor, deje su comentario', pattern:{value:/^[a-z\u00C0-\u00FF0-9]{2,}/i, message:"Por favor, deje un comentario válido"}})} rows={10} cols={35} ></textarea>
                                    <p className="errorMessage">{errors.comment?.message}</p>
                                </div>
                            </div>
                            <input type="submit" value="Enviar comentario" />
                        </form>
                    </div>
                    :
                    <div className="check-container">
                        <i class="fas fa-check-circle check"></i>
                        <h2>¡Muchas gracias!</h2>
                        <p>Su comentario se ha enviado con éxito</p>
                    </div>
            }
        </>
    );
}

export default Contact;