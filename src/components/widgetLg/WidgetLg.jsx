import './widgetLg.css'
export default function widgetLg() {

  const Button =({type}) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
      <dv className="widgetLg">
          <h3 className="widgetLgTitle">Cursos recientes</h3>
         <table className="widgetLgTable">
           <tr className="widgetLgTr">
            <th className="widgetLgTh">Nombre</th>
            <th className="widgetLgTh">Fecha publicacion</th>
            <th className="widgetLgTh">Fecha limite</th>
            <th className="widgetLgTh">Estado </th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
            <td className="widgetLgDateIn">2 junio 2022</td>
            <td className="widgetLgDateFn">20 junio 2022</td>
            <td className="widgetLgStatus"><Button type="Actualizado"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Recursos Humanos</span>
            </td>
            <td className="widgetLgDateIn">2 junio 2022</td>
            <td className="widgetLgDateFn">20 junio 2022</td>
            <td className="widgetLgStatus"><Button type="Pendiente"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://orientacion.universia.net.co/imgs2011/imagenes/gerente2-2019_02_01_155717@2x.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Gerencia</span>
            </td>
            <td className="widgetLgDateIn">2 junio 2022</td>
            <td className="widgetLgDateFn">20 junio 2022</td>
            <td className="widgetLgStatus"><Button type="Actualizado"/></td>
          </tr>
          </table>      
      </dv>
  )
}