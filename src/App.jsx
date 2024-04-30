/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import InputBox from './components/InputBox'

const telegram = window.Telegram.WebApp

const App = () => {
	const [cartItems] = useState([])

	useEffect(() => {
		telegram.ready()
	})

	const onSendData = useCallback(() => {
		const queryID = telegram.initDataUnsafe?.query_id

		if (queryID) {
			fetch('https://telegramwebapibot-b671371abfbb.herokuapp.com/web-data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					products: cartItems,
					queryID: queryID,
				}),
			})
		} else {
			telegram.sendData(JSON.stringify(cartItems))
		}
	}, [cartItems])

	useEffect(() => {
		telegram.onEvent('mainButtonClicked', onSendData)

		return () => telegram.offEvent('mainButtonClicked', onSendData)
	}, [onSendData])

	return (
		<div className='bg-gray-500 h-screen'>
			<TopBar />
			<InputBox />
		</div>
	)
}

export default App
