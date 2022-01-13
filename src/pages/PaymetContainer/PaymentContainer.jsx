import React, {useEffect, useState} from 'react';
// Components
import Payment from '../../components/Payment/Payment.jsx'
import Pacman from '../../components/Pacman/Pacman.jsx';

const PaymentContainer = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    
    return(
        <div>
            {
                loading ?
                <Pacman/>
                :
                <Payment/>
            }
        </div>
    )
}

export default PaymentContainer 