import React, { Component } from 'react'
import Menu from '../img/bars-solid.svg'
import Close from '../img/xmark-solid.svg'
import Cart from '../img/cart.svg'
// import Searchs from '../img/search.svg'
import { Link, Routes } from 'react-router-dom'
import '../scss/Header.scss'
// import { DataContext } from './Context'


const Header = ({ user }) => {
    // DataContext.state = {
    //     toggle: false
    // }

    // menuToggle = () => {
    //     this.setState({ toggle: !this.state.toggle })
    // }


    // const { toggle } = DataContext.state;

    const logout = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
    };
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">Nike</Link></h1>
            </div>
            {user ? (
                <ul className='toggle'>
                    <nav>
                        <ul className='toggle'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Product</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                            {/* <li className="close" onClick={this.menuToggle}>
                                <img src={Close} alt="" width="20" />
                            </li> */}
                            <li className="listItem">
                                <img
                                    src={user.photos[0].value}
                                    alt=""
                                    className="avatar"
                                />
                            </li>
                            <li className="listItem">{user.displayName}</li>
                            <li className="listItem" onClick={logout}>
                                Logout
                            </li>
                        </ul>
                        <div className="nav-cart">
                            <span>0</span>
                            <Link to="/cart">
                                <img src={Cart} alt="" width="20" />
                            </Link>
                        </div>
                    </nav>
                    <div className="search">

                        {/* <Link element={({ history }) => <Search history={history} />} /> */}

                    </div>
                </ul>
            ) : (
                <Link className="logo" to="login">
                    Login
                </Link>
            )}
        </header>
    );
};

export default Header;