import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Timer from '../timer/Timer'
import QuoteMachine from '../quoteMachine/QuoteMachine'
import './home.scss'
export default function Home() {
    return (
     
        <BrowserRouter>
           <nav>
            <ul>
                <li><Link exact className='link' to='/timer'>Pomodor-Clock</Link></li>
                <li><Link exact className='link' to='/quoteMachine'>Quote-Machine</Link></li>
                <li><Link exact className='link' to='/Calculator'>Calculator</Link></li>
                <li><Link exact className='link' to='/Drum-Machine'>Quote-Machine</Link></li>
            </ul>
       </nav>
            <Switch>
                <Route path="/timer" component={Timer} />
                <Route path="/quoteMachine" component={QuoteMachine} isPrivate />     
            </Switch>
        </BrowserRouter>
    );
  }

