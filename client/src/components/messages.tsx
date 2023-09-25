import React, { FC } from 'react'
import { useStore } from '../hooks/use-store'
import { Message } from './message'
import { observer } from 'mobx-react-lite'

export const Messages: FC = observer(() => {
    const {messagesStore: {
        services: {
            formatTime,
        },
        userId,
        list
    }} = useStore()

    return (
        <div className='message-area'>
            {list.length > 0 ? 
                <>
                    {list.map((message) =>
                        <Message message={message} userId={userId} formatTime={formatTime} />
                    )}
                </> 
                : 
                <div className='no-messages'>Сообщений нет</div>
            }
        </div>
    )
})