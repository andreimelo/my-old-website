import React from  'react'
import './style.scss' 
import Human from '../../assets/Human.svg'
import Header from '../../component/Header'
import NavigationBar from '../../component/NavigationBar';
import Button from '../../component/Button';
import { onAlertComingSoon } from '../../helpers/constant';

function Home (){
    return (
        <React.Fragment>
            <Header title="Andrei Melo | Home" description="n/a" />
            <NavigationBar/>
            <div className="container">
                <div className="container__row">
                    <div className="container__column">
                      <div className="container__column-inner">
                       <div className="container__title-ct1">Hey There !</div>
                       <div className="container__title-ct2">I’m Andrei Melo</div>
                       <div className="container__title-ct3">A Front End Developer</div>
                            <Button name="contact_me" onClickEvent={onAlertComingSoon}/>
                       </div>
                    </div>
                    <div className="container__column">
                       <img src={Human} id="human-flat-ct" alt="human"/> 
                    </div>
               </div>
            </div>
        </React.Fragment>
    )
}

export default Home;