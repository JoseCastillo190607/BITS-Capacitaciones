import React from 'react'
import './Featurecourses.css'
import {ThumbDown, ThumbUp} from '@mui/icons-material';
import {Link} from 'react-router-dom'
export default function Featurecourses() {
  return (
    <div className='feature'>
      
      {/* <Link to="/cursos+Des" className='Link'>
      <div className="featureItem">
          <span className="featureTitle">+Destacados</span>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbUp className='featureIcon positive'/>
            </span>
        </div>
        
        <span className="featureSub">Comparado la semana pasada</span>
       
       </div>
       </Link>
      */}
      
      {/* <div className="featureItem">
          <span className="featureTitle">Comentarios</span>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbUp/>
            </span>
        </div>
        
        <span className="featureSub">Comparado la semana pasada</span>
      </div> */}
     
     <div className="featureItem">
     <Link to="/cursos+Des" className='Link'>
          <span className="featureTitle">+Destacados</span>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbUp className='featureIcon positive'/>
            </span>
        </div>
        <span className="featureSub">Comparado la semana pasada</span>
      </Link>
      </div>

      <div className="featureItem">
        <Link to="/cursos-Des" className='Link'>
          <span className="featureTitle">-Destacados</span>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbDown className='featureIcon negative'/>
            </span>
        </div>
        <span className="featureSub">Comparado la semana pasada</span>
      </Link>
      </div>
      
    </div>
  )
}
