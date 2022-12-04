import React from 'react';
import "@styles/MobileMenu.scss";

const MobileMenu = () => {
    return (
        
    <div className="mobile-menu-container">
        <ul className="categories">

            <h1>CATEGORIES</h1>

            <li>
                <a href="/">All</a>
            </li>

            
            <li>
                <a href="/">Clothes</a>
            </li>

            
            <li>
                <a href="/">Electronics</a>
            </li>

            
            <li>
                <a href="/">Furnitures</a>
            </li>

            
            <li>
                <a href="/">Toys</a>
            </li>

            
            <li>
                <a href="/">Other</a>
            </li>

        </ul>

        <ul className="account">
            
            <li>
                <a href="/orders">My orders</a>
            </li>

            
            <li>
                <a href="/account">My account</a>
            </li>

        </ul>
            
        <div className="info-and-sing-out">
            <p>Santiavilaacin@hotmail.com</p>
            <a href="/login">Sing out</a>
        </div>
    </div>
    );
}

export default MobileMenu;
