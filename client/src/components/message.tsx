import React, {FC} from 'react'
import { MessageSchema } from '../api/entities/message/message.types'

interface Props {
    message: MessageSchema
    userId: number
    formatTime: (date: string) => string
}

export const Message: FC<Props> = ({message, userId, formatTime}) => {
    return (
        <div key={message.id} className={`message-row ${userId && message.userId === +userId ? 'right' : 'left'}`}>
            <div className={`message-cloud ${userId && message.userId === +userId ? 'right' : 'left'}`}>
                {userId && message.userId === +userId ? <></> :
                    <div className='message-sender'>{`User ${message.userId}`}</div>
                }
                <div>{message.title}</div>
                <div className='message-timestamp'>{formatTime(message.createdAt)}</div>
            </div>
        </div>
    )
}