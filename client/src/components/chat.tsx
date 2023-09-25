import React, { useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../hooks/use-store'
import { useAsyncEffect } from '../hooks/use-async-effect'
import { Messages } from './messages'
import { Textarea } from './textarea'

export const Chat: FC = observer(() => {
    const {messagesStore: {
        services: {
            setChatId,
            setUserId,
            initMessageList
        }
    }} = useStore()

    const { userId, chatId } = useParams()

    useEffect(() => {
        if (userId)
            setUserId(+userId)
        if (chatId)
            setChatId(+chatId)
    }, [userId, chatId])

    useAsyncEffect(() => {
        if (chatId)
            initMessageList(+chatId)
    }, [])

    return (
        <div className='centered'>
            <Messages />
            <Textarea />
        </div>
    )
})