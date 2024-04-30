/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Modal() {
	const [showModal, setShowModal] = React.useState(false)

	return (
		<>
			<button
				className='p-3 bg-zinc-500 text-white rounded-xl'
				type='button'
				onClick={() => {
					setShowModal(true)
				}}
			>
				Tasdiqlash
			</button>
			{showModal ? (
				<>
					<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-3'>
						<div className='relative w-auto my-6 mx-auto max-w-3xl'>
							<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
								<div className='relative p-6 flex-auto'>
									<p className='my-4 text-2xl text-center leading-relaxed'>
										So'rovingiz Muvaffaqiyatli Yuborildi. Tez Orada Siz Bilan
										Aloqaga Chiqamiz
									</p>
								</div>
								<div className='flex items-center justify-end p-6 border-t border-solid rounded-b'>
									<button
										className='p-3 w-full bg-zinc-500 text-white rounded-xl'
										type='button'
										onClick={() => setShowModal(false)}
									>
										OK
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
				</>
			) : null}
		</>
	)
}
