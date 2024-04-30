/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import InputBox from './components/InputBox'

const telegram = window.Telegram.WebApp

const App = () => {
	const [item] = useState([])

	useEffect(() => {
		telegram.ready()
	})

	const base_url = 'https://web.sariqtaxi.uz/orders/create/'

	useEffect(() => {
		const fetchData = () => {
			fetch(base_url, {
				method: 'POST',
				headers: {},
			})
		}
	}, [])

	const onSendData = useCallback(() => {
		const queryID = telegram.initDataUnsafe?.query_id

		if (queryID) {
			fetch('https://telegramwebapibot-b671371abfbb.herokuapp.com/web-data', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					products: item,
					queryID: queryID,
				}),
			})
		} else {
			telegram.sendData(JSON.stringify(item))
		}
	}, [item])

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
