import React from 'react'

export default function Message() {
  return (
    <div>
     <div className='chat chat-end'> 
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					{/* <img alt='Tailwind CSS chat bubble component' src={profilePic} /> */}
				</div>
			</div>
			<div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up </div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
		</div>
    </div>
  )
}