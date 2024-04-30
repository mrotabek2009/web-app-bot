import { useState } from 'react'
import Button from './Button'
import ButtonLight from './ButtonLight'
import { Link } from 'react-router-dom'

const InputBox = () => {
	const [numberOfPassengers, setNumberOfPassengers] = useState('')
	const [numberOfChildren, setNumberOfChildren] = useState('')

	const handleButtonClick = () => {
		if (numberOfPassengers === '' || numberOfChildren === '') {
			alert("Iltimos hamma ma'lumotlarni kiriting")
		} else {
			console.log('Number of passengers:', numberOfPassengers)
			console.log('Number of children:', numberOfChildren)
		}
	}

	return (
		<div className='w-80 h-[27rem] bg-white mx-auto rounded-md mt-10 flex flex-col items-center justify-center'>
			<h1 className='text-3xl text-center font-bold'>YO'LOVCHI MA'LUMOTLARI</h1>
			<div className='flex flex-col gap-2 items-center'>
				<label className='text-gray-600' htmlFor='passengers'>
					Yo'lovchilar soni
				</label>
				<select
					className='border w-72 h-10 mx-auto'
					name='passengers'
					id='passengers'
					value={numberOfPassengers}
					onChange={e => setNumberOfPassengers(e.target.value)}
				>
					<option value=''>Sonni tanlang</option>
					<option value='1 Odam'>1 Odam</option>
					<option value='2 Odam'>2 Odam</option>
					<option value='3 Odam'>3 Odam</option>
					<option value='4 Odam'>4 Odam</option>
					<option value='5 Odam'>5 Odam</option>
					<option value='6 Odam'>6 Odam</option>
					<option value='7 Odam'>7 Odam</option>
					<option value='8 Odam'>8 Odam</option>
				</select>
				<label className='text-gray-600' htmlFor='children'>
					Bolalar soni
				</label>
				<select
					className='border w-72 h-10 mx-auto'
					name='children'
					id='children'
					value={numberOfChildren}
					onChange={e => setNumberOfChildren(e.target.value)}
				>
					<option value=''>Bola yo'q</option>
					<option value='1 Bola'>1 Bola</option>
					<option value='2 Bola'>2 Bola</option>
					<option value='3 Bola'>3 Bola</option>
					<option value='4 Bola'>4 Bola</option>
					<option value='5 Bola'>5 Bola</option>
					<option value='6 Bola'>6 Bola</option>
					<option value='7 Bola'>7 Bola</option>
					<option value='8 Bola'>8 Bola</option>
				</select>
			</div>

			<div className='flex gap-2 mt-20'>
				<ButtonLight text={'Bekor qilish'} />
				{numberOfPassengers !== '' && numberOfChildren !== '' && (
					<Link to={'/comment'}>
						<Button text={'Keyingisi'} onClick={handleButtonClick} />
					</Link>
				)}
			</div>
		</div>
	)
}

export default InputBox
