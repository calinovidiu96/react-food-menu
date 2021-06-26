import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals_wallpaper.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="Food" />
			</div>
		</React.Fragment>
	);
};

export default Header;
