/* eslint-disable react/no-unescaped-entities */
import ButtonLight from './ButtonLight'
import Modal from './Modal'

const InputBoxThird = () => {
	const formatPhoneNumber = value => {
		const cleanedValue = value.replace(/\D/g, '')

		const formattedValue = cleanedValue.replace(
			/(\d{2})(\d{3})(\d{2})(\d{2})/,
			'$1-$2-$3-$4'
		)

		return formattedValue
	}

	const handleInputChange = event => {
		const input = event.target
		let inputValue = input.value

		const formattedValue = formatPhoneNumber(inputValue)

		if (inputValue.length > 9) {
			inputValue = inputValue.slice(0, 9)
		}

		input.value = formattedValue
	}

	return (
		<div className='w-80 h-[27rem] bg-white mx-auto rounded-md mt-10 flex flex-col items-center justify-center'>
			<h1 className='text-3xl text-center font-bold'>YO'LOVCHI MA'LUMOTLARI</h1>
			<div className='flex flex-col gap-2 items-center'>
				<label className='text-gray-600' htmlFor='numbers'>
					Izohingiz bormi
				</label>

				<textarea
					className='border w-72 h-32 mx-auto p-4'
					placeholder='Izoh'
					style={{ resize: 'none' }}
				></textarea>
				<label className='text-gray-600' htmlFor='numbers'>
					Telefon raqamingizni kiriting
				</label>
				<div className='flex items-center border p-1 px-4'>
					<p>+998</p>
					<input
						type='text'
						className='border-none h-10 mx-auto p-4 remove-arrow'
						placeholder='90-123-45-67'
						onInput={handleInputChange}
						maxLength={9}
					/>
				</div>
			</div>

			<div className='flex gap-2 mt-5'>
				<ButtonLight text={'Bekor qilish'} />
				<Modal />
			</div>
		</div>
	)
}

export default InputBoxThird
