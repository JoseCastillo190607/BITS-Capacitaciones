import React from 'react'
import './Featurecourses.css'
import {ThumbDown, ThumbUp} from '@mui/icons-material';
import {Link} from 'react-router-dom'
export default function Featurecourses() {

  const Button =({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }

  return (
    <div className='feature'>
     <div className="featureItem">
     <Link to="/cursos+Des" className='Link'>
          <span className="featureTitle">+Destacados</span></Link>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbUp className='featureIcon positive'/>
            </span>
        </div>
        <span className="featureCursoRate">Esta semana</span>

        <span className="featureSub">
           
            <table className="widgetLgTable">
           <tr className="widgetLgTr">
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Recursos Humanos</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Recursos Humanos</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr>
          </table>     
        </span>
      </div>

      <div className="featureItem">
        <Link to="/cursos-Des" className='Link'>
          <span className="featureTitle">-Destacados</span></Link>
        <div className="featureCursoContainer">
            <span className="featureCurso">Cursos</span>
            <span className="featureCursoRate">
            Cursos<ThumbDown className='featureIcon negative'/>
            </span>    
        </div>
        <span className="featureCursoRate">Esta semana</span>
        <span className="featureSub">
        <table className="widgetLgTable">
           <tr className="widgetLgTr">
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr> 
           <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Recursos Humanos</span>
            </td>
          </tr> 
           <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgCourse">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Recursos Humanos</span>
            </td>
          </tr>
           
          </table> 
        </span>
      
      </div>
      
    </div>
  )
}
