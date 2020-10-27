import React, {useState} from 'react'
import 'ed-grid'
import axios from 'axios'

export default function UserScreen() {

    const [userName, setuserName] = useState('');

    const saveUser = () => {
        sessionStorage.setItem("name", userName);
        axios.post(process.env.REACT_APP_API_URL + "LogBook", {userName: userName})
        .then(()=> window.location.reload())
        .catch(e=> console.error(e));
    }
    return (
        <div className="lg-50 lg-to-center s-border s-radius">
        <p className="s-pxy-2 s-mb-0">Bienvenido a nuestra sala de chat
        por favor ingrese su nombre</p>
        <div className="s-bg-grey s-pxy-2 ed-grid s-grid-3">
          <input value={userName}  onChange={e => setuserName(e.target.value)} className="s-pxy-1 s-cols-2" 
                type="text" placeholder="Ingrese Nombre" ></input>
          <button className="button" onClick={saveUser}>Ingresar</button>
        </div>
      </div>
    )    
}
