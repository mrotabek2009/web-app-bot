import { useState } from 'react'
import Button from './Button'
import ButtonLight from './ButtonLight'
import { Link } from 'react-router-dom'

const InputBox = () => {
	const [fromValue, setFromValue] = useState('')
	const [toValue, setToValue] = useState('')
	const [timeValue, setTimeValue] = useState('')

	const handleButtonClick = () => {
		if (fromValue === '' || toValue === '' || timeValue === '') {
			alert("Iltimos hamma ma'lumotlarni kiriting")
		} else {
			console.log('From:', fromValue)
			console.log('To:', toValue)
			console.log('Time:', timeValue)
		}
	}

	return (
		<div className='w-80 h-[27rem] bg-white mx-auto rounded-md mt-10 flex flex-col items-center justify-center'>
			<h1 className='text-3xl text-center font-bold'>YO'LOVCHI MA'LUMOTLARI</h1>
			<div className='flex flex-col gap-2 items-center'>
				<label className='text-gray-600' htmlFor='from'>
					Qayerdan
				</label>
				<select
					className='border w-72 h-10 mx-auto'
					name='from'
					id='from'
					value={fromValue}
					onChange={e => setFromValue(e.target.value)}
				>
					<option disabled value=''>
						Yo'nalishni tanlang
					</option>
					<option value='Qashqadaryo - Toshkent'>Qashqadaryo - Toshkent</option>
					<option value='Toshkent - Qashqadaryo'>Toshkent - Qashqadaryo</option>
				</select>
				<label className='text-gray-600' htmlFor='to'>
					Qayerga
				</label>
				<select
					className='border w-72 h-10 mx-auto'
					name='to'
					id='to'
					value={toValue}
					onChange={e => setToValue(e.target.value)}
				>
					<option disabled value=''>
						Yo'nalishni tanlang
					</option>
					<option value='Jizzax - Toshkent'>Jizzax - Toshkent</option>
					<option value='Toshkent - Jizzax'>Toshkent - Jizzax</option>
				</select>
				<label className='text-gray-600' htmlFor='time'>
					Qachon safar qilmoqchisiz?
				</label>
				<select
					className='border w-72 h-10 mx-auto'
					name='time'
					id='time'
					value={timeValue}
					onChange={e => setTimeValue(e.target.value)}
				>
					<option disabled value=''>
						Vaqtni tanlang
					</option>
					<option value='30 daqiqa - 1 soat ichida'>
						30 daqiqa - 1 soat ichida
					</option>
					<option value='1 soat - 2 soat ichida'>1 soat - 2 soat ichida</option>
					<option value='2 soat - 3 soat ichida'>2 soat - 3 soat ichida</option>
					<option value='3 soat - 4 soat ichida'>3 soat - 4 soat ichida</option>
					<option value='4 soat - 5 soat ichida'>4 soat - 5 soat ichida</option>
				</select>
			</div>

			<div className='flex gap-2 mt-5'>
				<ButtonLight text={'Bekor qilish'} />
				<Link to='/numbers'>
					<button onClick={handleButtonClick}>
						<Button text={'Keyingisi'} />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default InputBox
