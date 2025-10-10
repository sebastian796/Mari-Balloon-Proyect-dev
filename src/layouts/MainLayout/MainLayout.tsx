import * as React from 'react';
import { Outlet } from 'react-router-dom';
import {NavBar,Footer} from '@/components/common/';

interface IMainLayout{}


const MainLayout:React.FunctionComponent<IMainLayout> = () => {
  return (
    <div>
        <NavBar />
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
     );
};

export default MainLayout;


