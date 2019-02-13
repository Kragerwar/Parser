import React, { Component } from "react";
import Registration from './Registration'
import Dropdown from 'react-bootstrap/Dropdown'
//import 'bootstrap/dist/css/bootstrap.css';


class Head extends Component{

    render() {
        const { userLoggedIn } = this.props

        return(
        <header className="menuHead">
                <div className="container rounded-right">
                    <div className="row">

                        <div id="logo" className="col-2 ">
                            <h3> <a className="nav-link " href="/" ><span>Cap</span>Revision</a> </h3>
                        </div>

                        <div className="col-10">

                            <ul className="nav justify-content-end">
                                <li>
                                    <a className="nav-link " href="/" title="Перейти на главную">Главная</a>
                                </li>
                                <li>

                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" title="Информация">
                                            Информация
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">О криптовалютах</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Контакты</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">О подписках</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </li>
                                <li>
                                    <a className="nav-link" href="/" title="Подписки">Подписки<span className="badge badge-danger">1 122</span></a>
                                </li>
                                <li>
                                    {userLoggedIn ? null : <Registration/>}
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>


        </header>
        )
    }

}

export default Head;