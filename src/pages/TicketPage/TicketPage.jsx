import React, {useEffect, useState} from 'react';

// components
import Pacman from '../../components/Pacman/Pacman';
import Ticket from '../../components/Ticket/Ticket';

const TicketPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, []);
    return(
        <div>
            {
                loading ?
                <Pacman/>
                :
                <Ticket/>
            }
        </div>
    )
}

export default TicketPage 