import React from "react";
import "./header.scss";
import logo from "../../img/logo.png";
import darkmood from "../../img/darkmood.png";
export const Header = () => {
const [theme , setTheme]= React.useState("ligth-theme")
const  toggleTheme =() =>{
  if(theme === "dark-theme"){
    setTheme("ligth-theme")
  } else{
    setTheme("dark-theme")
  }
}
React.useEffect(()=>{
  document.body.className = theme
}, [theme])

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_wrap">
          
            <img src={logo} alt={logo} />
          
            <img src={darkmood} alt={darkmood} onClick={()=> toggleTheme()}/>
          </div>
        </div>
      </div>
    </>
  );
};
