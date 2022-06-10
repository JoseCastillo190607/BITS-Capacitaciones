import { ThumbDown } from '@mui/icons-material'
import './cursosMenosDestacados.css'

export default function CursosMenosDestacados() {
    return (
        <div className='Cursofeature'>
         <div className="featureItem">
             <span className="featureTitle">-Destacados</span>
           <div className="featureCursoContainer">
               <span className="featureCurso">Curso</span>
               <span className="featureCursoRate">
               Gerencia<ThumbDown className='featureIcon negative'/>
               </span>
           </div>
           
           <span className="featureSub">Comparado la semana pasada</span>
         </div> 
   
         <div className="featureItem">
             <span className="featureTitle">-Destacados</span>
           <div className="featureCursoContainer">
               <span className="featureCurso">Curso</span>
               <span className="featureCursoRate">
               Documentacion<ThumbDown className='featureIcon negative'/>
               </span>
           </div>
           <span className="featureSub">Comparado la semana pasada</span>
         </div>
   
         <div className="featureItem">
             <span className="featureTitle">-Destacados</span>
           <div className="featureCursoContainer">
               <span className="featureCurso">Curso</span>
               <span className="featureCursoRate">
               Recursos Humanos<ThumbDown className='featureIcon negative'/>
               </span>
           </div>
           
           <span className="featureSub">Comparado la semana pasada</span>
         </div> 
         <div className="featureItem">
             <span className="featureTitle">-Destacados</span>
           <div className="featureCursoContainer">
               <span className="featureCurso">Cursos</span>
               <span className="featureCursoRate">
               Cursos<ThumbDown className='featureIcon negative'/>
               </span>
           </div>
           
           <span className="featureSub">Comparado la semana pasada</span>
         </div> 
       </div>
     )
}

