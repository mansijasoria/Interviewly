import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTNG',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED'
}

const Agent = ({userName} : AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        'Whats your name',
        'My name Is Jhon Doe, nice to meet you!'
    ]
    const lastmessage = messages[messages.length-1];
  return (
   <>
    <div className='call-view'>
        <div className="card-interviewer">
            <div className="avatar">
                <Image src="/ai-avatar.png" alt="vapi" width={65} height={54} className='object-cover' />
                {isSpeaking && <span className='animate-speak'/>}
            </div>
            <h3>AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.jpg"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
            <div className='transcript'>
                <p key={lastmessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                    {lastmessage}
                </p>
            </div>
        </div>
      )}

    <div className="w-full flex justify-center">
        {callStatus != 'ACTIVE'? (
            <button className='relative btn-call'>
                <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus != 'CONNECTING' & 'hidden')}  />

                    <span>
                    {callStatus === 'INACTIVE' || callStatus === "FINISHED" ? 'Call' : '. . .' }
                    </span>
            </button>
        ):(
            <button className='btn-disconnect'>End</button>
        )}
    </div>
   </>
  )
}

export default Agent