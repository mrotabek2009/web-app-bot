/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import Button from './Button'
import ButtonLight from './ButtonLight'

const InputBox = () => {
	return (
		<div className='w-80 h-[27rem] bg-white mx-auto rounded-md mt-10 flex flex-col items-center justify-center'>
			<h1 className='text-3xl text-center font-bold'>YO'LOVCHI MA'LUMOTLARI</h1>
			<div className='flex flex-col gap-2 items-center'>
				<label className='text-gray-600' htmlFor='from'>
					Qayerdan
				</label>
				<select className='border w-72 h-10 mx-auto' name='from' id='from'>
					<option value="Yo'nalishni tanlang">Yo'nalishni tanlang</option>
					<option value='Qashqadaryo'>Qashqadaryo</option>
					<option value='Samarqand'>Samarqand</option>
					<option value='Toshkent shahri'>Toshkent shahri</option>
				</select>
				<label className='text-gray-600' htmlFor='to'>
					Qayerga
				</label>
				<select className='border w-72 h-10 mx-auto' name='to' id='to'>
					<option value="Yo'nalishni tanlang">Yo'nalishni tanlang</option>
					<option value='Qashqadaryo'>Qashqadaryo</option>
					<option value='Samarqand'>Samarqand</option>
					<option value='Toshkent shahri'>Toshkent shahri</option>
				</select>
				<label className='text-gray-600' htmlFor='time'>
					Qachon safar qilmoqchisiz?
				</label>
				<select className='border w-72 h-10 mx-auto' name='time' id='time'>
					<option value='Vaqtni tanlang'>Vaqtni tanlang</option>
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
				<Link to={'/numbers'}>
					<Button text={'Keyingisi'} />
				</Link>
			</div>
		</div>
	)
}

export default InputBox
