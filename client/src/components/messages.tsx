import React, { FC } from 'react'
import { useStore } from '../hooks/use-store'
import { Message } from './message'
import { observer } from 'mobx-react-lite'

export const Messages: FC = observer(() => {
    const {messagesStore: {
        services: {
            formatTime,
        },
        chatId,
        userId,
        list
    }} = useStore()

    return (
        <div className='message-area'>
            {list.filter((message) => chatId && message.chatId === +chatId).length > 0 ? 
                <>
                    {list.filter((message) => chatId && message.chatId === +chatId).map((message) =>
                        <Message message={message} userId={userId} formatTime={formatTime} />
                    )}
                </> 
                : 
                <div className='no-messages'>Сообщений нет</div>
            }
        </div>
    )
})