import React, { useState } from 'react'
import classes from './Home.module.css'
import Button from './Button.js'

function Home() {
	const [res, setRes] = useState('')

	const buttons = [
		'c',
		'Del',
		'-',
		'*',
		'7',
		'8',
		'9',
		'/',
		'4',
		'5',
		'6',
		'-',
		'1',
		'2',
		'3',
		'+',
		'0',
		'.',
		'=',
	]

	const findval = () => {
		let result = Function('return ' + res)()
		setRes(result.toString())
	}

	const handler = (arg) => {
		// console.log(arg)
		if (res === 'Infinity') {
			setRes('')
			return
		}
		if (arg === 'c') setRes('')
		else if (arg === '=') findval()
		else if (arg === 'Del') {
			let n = res.length
			if (n > 0) setRes(res.slice(0, n - 1))
		} else setRes(res.concat(arg))
	}

	return (
		<div className={classes.home}>
			Calculator
			<div className={classes.inner}>
				<div className={classes.result}>
					<div className={classes.resbox}>{res} </div>
				</div>
				<div className={classes.btns}>
					{buttons.map((ele, index) => {
						return <Button handler={handler} value={ele} key={index} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Home
