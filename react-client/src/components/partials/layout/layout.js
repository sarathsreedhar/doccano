import React ,{useContext} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core";
import { darkTheme, lightTheme } from "../../../styles/theme";
import { ThemeModeContext }  from "../../../providers/ThemeModeProvider";


import Header from "../header/header";

const Layout = (props)=>{
    const {children} = props;
    const { isDarkMode } = useContext(ThemeModeContext);
    const theme = isDarkMode ? createMuiTheme(darkTheme) : createMuiTheme(lightTheme);
    
    return(
        <ThemeProvider theme={theme}>
        
            <Header/>
            <main>
                {children}
            </main>

        </ThemeProvider>
        
    )
}


export default Layout;