import React from 'react';
import './style.css'
import comandos from '../images/comandos-eletricos.jpg';
import instalacoes from '../images/instalacoes-eletricas.jpg';
import revit from '../images/revit-arquiteture.jpg';


export default function Cards() {
    return (
    <div id='container-cards'>
    <div className='cards'>
        <img src= {comandos} alt='' className='imgcards' />
        <h3>Comandos eletricos</h3>
        <p className='curso-descricao'>
        desenvolvimento de competências relativas à montagem e manutenção de comandos elétricos de máquinas e equipamentos <br></br>
        
        </p>
        <p id='duracao-curso1'>
        carga horária : 120 horas

        </p>
        <hr width='80%' />
        <h4> R$ 1500,00 </h4>
    </div>
    
    <div className='cards'>
        <img src={instalacoes} alt='' className='imgcards' />
        <h3>Eletricista Instalador</h3>
        <p className='curso-descricao'>
        desenvolvimento de competências relativas a princípios e leis que regem o funcionamento de instalações elétricas residenciais, públicas, comerciais e industriais <br></br>
        </p>
        <p className='carga-horaria'>
        carga horária : 160 horas

        </p>
        
        <hr width='80%' />
        <h4> R$ 2070,00 </h4>
    </div>
   
    <div className='cards'>
        <img src= {revit} alt=''  className='imgcards' />
        <h3>Revit Arquiteture</h3>
        <p className='curso-descricao'>
        desenvolvimento de competências relativas à extração de vistas planas 2D, elaboração, criação e operação de projetos virtualmente construídos em três dimensões. <br></br>
        
        </p>
        <p id='duracao-curso3'>
        carga horária : 40 horas

        </p>
        <hr width='80%' />
        <h4> R$ 990,00 </h4>
    </div>

    </div>    
   
    
    );
}

