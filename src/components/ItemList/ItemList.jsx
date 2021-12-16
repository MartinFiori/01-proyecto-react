import React, { useEffect, useState } from "react";
import './ItemList.css'
import Img1 from '../../assets/cards/gatitos.jpg'
import Img2 from '../../assets/cards/neko.jpg'
import Img3 from '../../assets/cards/auris.jpg'
import Img4 from '../../assets/cards/celu.jpg'
import Img5 from '../../assets/cards/compu.jpg'
import Img6 from '../../assets/cards/kurama.jpg'
import Img7 from '../../assets/cards/raptor.jpg'
import Img8 from '../../assets/cards/mariposa.jpg'
import Img9 from '../../assets/cards/pardo.jpg'
import Img10 from '../../assets/cards/pterodactilo.jpg'
import Img11 from '../../assets/cards/tricerapto.jpg'
import Img12 from '../../assets/cards/pejelagarto.jpg'
import Img13 from '../../assets/cards/macetatorre.jpg'
import Img14 from '../../assets/cards/noface.jpg'
import Img15 from '../../assets/cards/kirara.jpg'
import Img16 from '../../assets/cards/macetagroot.jpg'
import Img17 from '../../assets/cards/babyyoda.jpg'
import Img18 from '../../assets/cards/macetaportal.jpg'
import Img19 from '../../assets/cards/pokebola.jpg'
import Img20 from '../../assets/cards/llaveroharry.jpg'
import Img21 from '../../assets/cards/calabazas.jpg'
import Pacman from "../Pacman/Pacman";
import Item from "../Item/Item.jsx";

const ItemList = ()=>{
    const [loading, setLoading] = useState(true)
    const [dataItems, setDataItems] = useState([])
    const productos = [
        {
            id: 1,
            name: "Llavero Gatito",
            price: 250,
            img: Img1,
            description: "Un Llavero Gatito que se adapta a vos",
        },
        {
            id: 2,
            name: "Kuromi",
            price: 1600,
            img:Img2,
            description: "Un gato que se adapta a vos",
        },
        {
            id: 3,
            name: "Stand para Auriculares",
            price: 1100,
            img:Img3,
            description: "Un soporte de auricular que se adapta a vos",
        },
        {
            id: 4,
            name: "Soporte para Celular",
            price: 370,
            img:Img4,
            description: "Un soporte de celular que se adapta a vos",
        },
        {
            id: 5,
            name: "Stand para Notebook",
            price: 1400,
            img:Img5,
            description: "Un soporte de laptop que se adapta a vos",
        },
        {
            id: 6,
            name: "Kurama",
            price: 2000,
            img:Img6,
            description: "Un kurama que se adapta a vos",
        },
        {
            id: 7,
            name: "Raptor",
            price: 250,
            img:Img7,
            description: "Un Raptor que se adapta a vos",
        },
        {
            id: 8,
            name: "Mariposa",
            price: 250,
            img:Img8,
            description: "Una Mariposa que se adapta a vos",
        },
        {
            id: 9,
            name: "Pardo",
            price: 250,
            img:Img9,
            description: "Un Pardo que se adapta a vos",
        },
        {
            id: 10,
            name: "Pterodactilo",
            price: 250,
            img:Img10,
            description: "Un Pterodactilo que se adapta a vos",
        },
        {
            id: 11,
            name: "Triceraptop",
            price: 250,
            img:Img11,
            description: "Un Triceraptop que se adapta a vos",
        },
        {
            id: 12,
            name: "Lagartija",
            price: 250,
            img:Img12,
            description: "Una Lagartija que se adapta a vos",
        },
        {
            id: 13,
            name: "Maceta Torre",
            price: 450,
            img:Img13,
            description: "Unas Maceta Torre que se adapta a vos",
        },
        {
            id: 14,
            name: "No Face",
            price: 350,
            img:Img14,
            description: "Un No Face que se adapta a vos",
        },
        {
            id: 15,
            name: "Kirara",
            price: 200,
            img:Img15,
            description: "Una Kirara que se adapta a vos",
        },
        {
            id: 16,
            name: "Maceta Baby Groot",
            price: 620,
            img:Img16,
            description: "Una Maceta Baby Groot que se adapta a vos",
        },
        {
            id: 17,
            name: "Baby Yoda",
            price: 550,
            img:Img17,
            description: "Un Baby Yoda que se adapta a vos",
        },
        {
            id: 18,
            name: "Maceta Portal",
            price: 600,
            img:Img18,
            description: "Una Maceta Portal que se adapta a vos",
        },
        {
            id: 19,
            name: "Pokebola Porta Cartuchos Switch",
            price: 750,
            img:Img19,
            description: "Una Pokebola Porta Cartuchos Switch que se adapta a vos",
        },
        {
            id: 20,
            name: "Llavero Harry Styles",
            price: 250,
            img:Img20,
            description: "Un Llavero Harry Styles que se adapta a vos",
        },
        {
            id: 21,
            name: "Calabazas",
            price: 250,
            img:Img21,
            description: "Unas Calabazas que se adapta a vos",
        }
    ]

    const requesData = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })

    useEffect(() => {
        requesData.then((data)=>{
                console.log(`los productos son estos:`, data)
                setDataItems(data)
                setLoading(false)
        })
    }, []);
    
    return(
        <>
        {
            loading ?
            <Pacman/>
            :
            <div className="cards__container">
            {
            dataItems.map((prod, index)=>{
                return(
                    <Item key={index} data={prod}/>
                )
            })
            }
            
        </div>
        }
        </>
    )
}

export default ItemList