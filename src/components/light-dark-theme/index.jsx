import React from "react";
import useLocalStorage from "./useLocalStrorage";
import './theme.css'

const LightDark = () => {

    const [theme,setTheme] = useLocalStorage('theme','dark')

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark':'light')
    }


    
    return <div className="light-dark-mode" data-theme = {theme}>
        <div className="container">
            <p>Hello World</p>
            <button onClick={handleToggleTheme}>Change theme</button>
        </div>
    </div>
}

export default LightDark;