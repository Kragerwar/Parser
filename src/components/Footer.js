import React, { Component } from "react";
//import 'bootstrap/dist/css/bootstrap.css';

class Foot extends Component{

    render() {
        return(

            <footer>
            <div className="container-fluid">
                <a href="/" className="cap">Контакты</a>
                    <ul>
                        <li><a href="/">Mail</a></li>
                        <li><a href="/">tel</a></li>
                        <li><a href="/">adress</a></li>
                    </ul>
            </div>
            </footer>
        )
    }

}

export default Foot;