import React from 'react'
import Switch from 'react-switch'
import useDarkMode from 'use-dark-mode'

export default ()=>{
    const darkMode = useDarkMode(false)
    return (
        <Switch
            checked={darkMode.value}
            onChange={darkMode.toggle}
            offColor="#303952"
            onColor="#303952"
            uncheckedIcon={<div style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",marginRight:2,color:'#fff'}}> ☀</div>}
            checkedIcon={<div style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",}}> ☾</div>}
        />  
    )
}