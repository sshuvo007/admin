import React from 'react'
import Image from 'react-bootstrap/Image';
import { VscBellDot, VscAccount, VscTriangleDown, VscThreeBars } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import Logo from '../../assests/images/dummy-logo.png'
import './nav.scss'



const AdminNavbar = () => {
    return (
        <div className="admin__navbar">
            <div className="admin__container">
                <div className="admin__navbar_inner">


                    <div className="admin__nav_logo">
                        <div className="humberger">
                            {/* <VscThreeBars /> */}
                        </div>
                        <div className="logo__thumb">
                            <Image src={Logo} alt='' />
                        </div>
                    </div>


                    <div className="right__menus">
                        <div className="admin__profile_options">
                            <div className="profile__notification">
                                <VscBellDot />
                            </div>
                            <div className="profio__thumb thumb__group">

                                <VscAccount />
                                <VscTriangleDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar