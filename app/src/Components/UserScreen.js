import React, { Component, useState }from 'react'
import "ed-grid"


export default function UserScreen (){
      
      const [userName, setuserName] = useState('');

      const saveUser = () =>
      {
         sessionStorage.setItem("name", userName);
         window.location.reload();
      }
    
        return (
            <div className="lg-50 lg-to-center s-border s-radius">
            <p className="s-pxy-2 s-mb-0">EDgrid es una libreria construida con Sass 
                (y con versión CSS) para Responsive Web Design (RWD). Es muy ligero, 
                personalizable y te permite prototipar y crear layouts en muy poco
                tiempo sin conflictos con tu proyecto.</p>
            <div className="s-bg-grey s-pxy-2 ed-grid s-grid-3">
              <input value={userName}  onChange={e => setuserName(e.target.value)} className="s-pxy-1 s-cols-2" type="text" placeholder="Ingrese Nombre" ></input>
              <button className="button" onClick={saveUser}>Ingresar</button>
            </div>
          </div>
        )    
}
