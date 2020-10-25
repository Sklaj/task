import React from 'react';
import './css/App.scss';
import {Topbar} from "./ts/components/Topbar";
import {Content} from "./ts/components/Contant";
import {Sidebar} from "./ts/components/Sidebar";


export const App = () => {
    return (
        <div className="app-holder">
            <Topbar/>

            <div className="body-holder">
                <Content/>

                <Sidebar/>
            </div>
        </div>
    );
};
