import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type ComponentProps = {
    children: any;
}

const Layout: React.FC<ComponentProps> = ({children}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;