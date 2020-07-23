import React from "react";


import Header from "../header/header"


const Layout = (props)=>{
    const {children} = props;
    return(
        <React.Fragment>
        
            <Header/>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}


export default Layout;