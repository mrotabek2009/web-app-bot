/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'

const TopBar = () => {
	return (
		<div className='block w-full'>
			<ul role='tablist' className='flex justify-center gap-x-2'>
				<li role='presentation' className='shrink basis-0 flex-1'>
					<div className='min-w-10 min-h-10 w-full flex justify-center items-center text-xs align-middle'>
						<Link to='/'>
							<span className='size-10 mt-2 flex justify-center items-center flex-shrink-0 bg-zinc-500 font-medium text-white rounded-full'>
								1
							</span>
						</Link>
					</div>
					<div className='mt-3'>
						<span className='block text-sm font-medium text-center text-gray-800'>
							YO'LOVCHI MA'LUMOTLARI
						</span>
					</div>
				</li>
				<li role='presentation' className='shrink basis-0 flex-1'>
					<div className='min-w-10 min-h-10 w-full flex justify-center items-center text-xs align-middle'>
						<Link to='/numbers'>
							<span className='size-10 mt-2 flex justify-center items-center flex-shrink-0 bg-zinc-500 font-medium text-white rounded-full'>
								2
							</span>
						</Link>
					</div>
					<div className='mt-3'>
						<span className='block text-sm font-medium text-center text-gray-800'>
							YO'LOVCHILAR SONI
						</span>
					</div>
				</li>
				<li role='presentation' className='shrink  basis-0 flex-1'>
					<div className='min-w-10 min-h-10 w-full flex justify-center items-center text-xs align-middle'>
						<Link to={'/comment'}>
							<span className='size-10 mt-2 flex justify-center items-center flex-shrink-0 bg-zinc-500 font-medium text-white rounded-full'>
								3
							</span>
						</Link>
					</div>
					<div className='mt-3'>
						<span className='block text-sm font-medium text-center text-gray-800'>
							TUGATISH
						</span>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default TopBar
