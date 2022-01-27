import React, {useState, useEffect} from 'react';
import './AboutUs.css'
import Pacman from '../../components/Pacman/Pacman';
import Img from '../../assets/home/home1.jpg'

const AboutUs = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000);
    }, []);
    return(
        <>
        {
            loader ?
            <Pacman/>
            :
            <div className='homeContainer'>
            <h1>Sobre Nosotros</h1>
            <h2><a href="https://www.instagram.com/estoybrillandocon/?hl=es" target="_blank" className='brillandocon'>Estoy brillando con</a> es el lugar donde publicamos nuestras creaciones hechas en impresión 3D, nuestro fin es crear juntos diseño y diversión!</h2>
            <div className='containerInfo'>
                <img src={Img} alt="" className='containerInfo__img' />
                <div className="containerInfo__nosotros">
                    <h3 className="containerInfo__nosotros--pregunta">¿Cómo trabajamos?</h3>
                    <p className="containerInfo__nosotros--respuesta">Todo lo publicado en nuestra página web puede ser impreso en distintos colores y tamaños, ya sean los que están publicados en las opciones o a pedido, si no encontras exacto lo que buscas contactate con nosotros!</p>
                    <h3 className="containerInfo__nosotros--pregunta">Trabajos a pedido:</h3>
                    <p className="containerInfo__nosotros--respuesta">Tenes un emprendimiento al que queres promocionar, una maqueta para la facultad, un modelo 3d que te encanta, una figura de tu peli favorita, sea lo que sea podes mandarnos tu archivo 3d (ya sea creado por vos o descargado de internet) y te lo hacemos real.</p>
                    <p className="containerInfo__nosotros--respuesta">En caso de tener un emprendimiento y necesitas hacer llaveros u otro tipo de merchandising con el logo pero solo contas con la imagen (pdf, jpg) envíanosla y la hacemos 3d sin costo extra</p>
                    <h3 className="containerInfo__nosotros--pregunta">¿Como?</h3>
                    <p className="containerInfo__nosotros--respuesta">Mandanos los archivos (preferentemente: .skp .stl .3dm) via Whatsapp, o Mail (disponible en el pie de página) y contanos todos los detalles! Colores, tamaño, cantidad de artículos, etc</p>
                    <h3 className="containerInfo__nosotros--pregunta">¿Qué material utilizamos?</h3>
                    <p className="containerInfo__nosotros--respuesta">Trabajamos con <a href='https://www.3dnatives.com/es/guia-filamento-pla-en-la-impresion-3d-190820192/' className="plasticoPla brillandocon" target={"_blank"}>Plástico PLA</a>, el cual consideramos un material respetuoso con el medio ambiente.</p>
                </div>
            </div>
        </div>
        }
        </>
        
    )
}

export default AboutUs 