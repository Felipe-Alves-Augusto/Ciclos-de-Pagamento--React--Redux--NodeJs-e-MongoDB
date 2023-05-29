import '../common/template/dependencies'
import React from "react";
import Header from '../common/template/Header';
import Sidebar from '../common/template/Sidebar';
import Footer from '../common/template/Footer';
import AppRoutes from './Router';
import Messages from '../common/msg/Messages';

export default props => {

    return (

        <div className="wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <div className='content-wrapper'>
                <AppRoutes></AppRoutes>
            </div>
            <Footer></Footer>
            <Messages></Messages>
        </div>
    )

}