import React from 'react';
import './Ticket.css'

const Ticket = ({ticketInfo, orderId}) => {
    const { buyer, total, date } = ticketInfo

    return(
        <div className='container'>
            <div className='ticket__container'>
                <div className='ticket'>
                    <h2>Ticket</h2>
                    <p>Nombre: <span className='name'>{buyer.userName}</span></p>
                    <p>Teléfono de contacto: <span>{buyer.userNumber}</span></p>
                    <p>Numero de pedido: <span> {orderId}</span></p>
                    <p>Valor de la compra: <span>{`$${total}`}</span></p>
                    <p>Fecha de la compra: <span>{date}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Ticket 