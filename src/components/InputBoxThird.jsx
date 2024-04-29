/* eslint-disable react/no-unescaped-entities */
import ButtonLight from './ButtonLight'
import Modal from './Modal'

const InputBoxThird = () => {
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
					Qo'shimcha telefon
				</label>
				<input
					type='number'
					className='border w-72 h-10 mx-auto p-4 remove-arrow'
					placeholder='+998-90-123-45-67'
				/>
			</div>

			<div className='flex gap-2 mt-5'>
				<ButtonLight text={'Bekor qilish'} />
				<Modal />
			</div>
		</div>
	)
}

export default InputBoxThird
