import Featurecourses from '../../components/featurecourses/Featurecourses'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import './home.css'
export default function Home() {
  return (
    <div className='home'>
      <Featurecourses/>
      <div className="homeWidget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
