import React from 'react'
import classes from './Button.module.css'

// passing value through the props
function Button({ value, handler }) {
	return (
		<div
			className={
				value === 'c' || value === '='
					? `${classes.calcBtns} ${classes.res}`
					: `${classes.calcBtns}`
			}
			onClick={() => handler(value)}>
			{value}
		</div>
	)
}

export default Button
