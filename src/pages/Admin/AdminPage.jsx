import React, {useState, useEffect} from 'react';

// Components
import Pacman from '../../components/Pacman/Pacman';
import Admin from '../../components/Admin/Admin.jsx'

const AdminPage = () => {
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
                <Admin/>
            }
        </div>
    )
}

export default AdminPage 