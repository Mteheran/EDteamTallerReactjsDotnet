import React from 'react'
import SalaChat from './SalaChat'

export default function Salas() {
    return (        
        <div>            
            <h1 className="s-left m-center lg-right">Bienvenido a la sala de chat</h1>
            <div className="ed-grid rows-gap s-grid-4">
                <div className="ed-grid s-cols-1">
                    <div className="s-mb-05 s-bg-blue  s-radius">                      
                        <a href="#">                
                            <div>  
                                <p className="s-mb-05"><strong>#</strong> Sala 1</p>
                            </div>
                        </a>      
                    </div>

                    <div className="s-mb-05 s-bg-blue  s-radius">
                        <a href="#">                
                            <div>  
                                <p className="s-mb-05"><strong>#</strong> Sala 2</p>
                            </div>
                        </a>   
                    </div>
                </div>
                <div className="s-cols-3">
                    <SalaChat></SalaChat>
                </div>
            </div>
        </div>
      );
}
