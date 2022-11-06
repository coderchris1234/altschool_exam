import { Link } from "react-router-dom";
import React from 'react';
import { ReactComponent as CartIcon } from "../../assets/vectors/cart-svgrepo-com.svg";
import { ReactComponent as UserIcon } from "../../assets/vectors/user-svgrepo-com.svg";
import { useState } from "react";

const NavIconList = () => {
    const [authPopupState, setAuthPopupState] = useState(false);

    const triggerAuthPopup = () => {
        console.log('auth pop up');
        setAuthPopupState(!authPopupState)
    }

    return (
        <div className="flex gap-5">
            <span>
                <button onClick={triggerAuthPopup} >
                    <UserIcon height="25px" />
                </button>
                { authPopupState &&
                    <div className="auth-pop shadow-lg p-5 absolute bg-white right-[80px] z-[30]">
                        <ul className="gap-4 flex flex-col">
                            <li><Link onClick={triggerAuthPopup} to="/login">Login</Link></li>
                            <li><Link onClick={triggerAuthPopup} to="/register">Register</Link></li>
                        </ul>
                    </div>
                }
            </span>
            <span>
                <Link>
                    <CartIcon height="25px" />
                </Link>
            </span>
        </div>
    )
}


export default NavIconList