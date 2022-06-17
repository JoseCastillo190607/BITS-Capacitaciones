import React from 'react';
import "./topbar.css"
import { Link } from 'react-router-dom';
import {NotificationsNone,Settings} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to="" className='Link'>
                      <div className='divFlex'>
                        
                            <div className='iBits'>Capacitaciones B</div>
                            <div><div className='circuloi'></div><div className='palitoi'></div></div>
                            <div>ts</div>    
                       </div>
                    </Link>
                </div>
                <div className="topRight">
                   <div className="topbarIconContainer">
                       <NotificationsNone/>
                       <div className='circulo'>
                            <span className="topIconBadge"/>2<span/>
                       </div>
                    </div> 
                    <div className='topbarIconContainer'>
                        <Settings/>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
