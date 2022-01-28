import React, {useState, useEffect} from 'react';

// Components
import Pacman from '../../components/Pacman/Pacman';
import Contact from '../../components/Contact/Contact';

const ContactPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    return(
        <>
        {
            loading ?
            <Pacman/>
            :
            <Contact/>
        }
        </>
    )
}

export default ContactPage 