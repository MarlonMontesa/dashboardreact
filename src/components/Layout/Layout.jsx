import React from 'react'
import css from './Layout.module.css'
import {BiSearch} from 'react-icons/bi'
import moment from 'moment/moment'
import Sidebar from '../SideBar/Sidebar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const{pathName} = useLocation()


  return (
    <div className={css.container}>
        <Sidebar/>

        {/* making the dashboard as the default */}
        {pathName === "/" ? <Navigate to="/dashboard" />: ""}

        <div className={css.dashboard}>
            <div className={css.topBaseGradient}>
                <div className="gradient-red"></div>
                <div className="gradient-orange"></div>
                <div className="gradient-blue"></div>
            </div>

                <div className={css.header}>
                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    <div className={css.searchBar}>
                        <BiSearch size={20}/>
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className={css.profile}>
                        <img src="./FinalPic.jpg" alt="profile" />
                        <div className={css.details}>
                            <span>Marlon Montesa</span>
                            {/*<span>montesamarlon20@gmail.com</span>*/}
                        </div>
                    </div>

                
            </div>
                <div className={css.content}>
                <Outlet/>
                </div>

        </div>
    </div>
  )
}

export default Layout