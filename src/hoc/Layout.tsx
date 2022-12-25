import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutI {
    children?: React.ReactNode
}

const Layout = ({children}: LayoutI) => {
    return (
        <>
            <Header></Header>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;