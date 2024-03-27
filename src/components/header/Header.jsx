import React from 'react'
import Logo from "../../assets/nba-logo.png"
import HeaderStyle from "./Header.module.scss"
const Header = () => {
  return (
    <div className={HeaderStyle.header}>
        <img src={Logo} alt="NBA Logo" className="logo" />
        <h1>NBA Legends</h1>
    </div>
  )
}

export default Header