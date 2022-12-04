import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
	const { state } = useContext(AppContext);

	const changeToggle = toggle => {
		if(toggle === "menu"){
			setToggleMenu(!toggleMenu);
			setToggleOrders(false);
		} else if(toggle === "cart"){
			setToggleOrders(!toggleOrders);
			setToggleMenu(false);
			setToggleMobileMenu(false)
		}else if(toggle === "mobile-menu"){
			setToggleMobileMenu(!toggleMobileMenu)
			setToggleOrders(false);
		};
	}

	return (
		<nav>
			<img
			src={menu}
			alt="menu"
			className="menu"
			onClick={() => changeToggle("mobile-menu")}
			/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
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
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email"
						onClick={() => changeToggle("menu")}
					>
						santiavilaacin@hotmail.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => changeToggle("cart")}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleMenu ? <Menu /> : null}
			{toggleMobileMenu ? <MobileMenu /> : null}
			{toggleOrders ? <MyOrder 
				toggleOrders={toggleOrders}
				setToggleOrders={setToggleOrders} /> : null}
		</nav>
	);
}


export default Header;