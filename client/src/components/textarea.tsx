import React from 'react'
import { useStore } from '../hooks/use-store'
import img from '../icons/send_message.png'
import { observer } from 'mobx-react-lite'

export const Textarea = observer(() => {
    const {messagesStore: {
        services: {
            handleSendBoxClick,
            handleChangeTextareaValue
        },
        textareaValue
    }} = useStore()

    return (
        <div className='bottom-area'>
            <div className='input-area'>
                <textarea className='textarea' value={textareaValue} onChange={handleChangeTextareaValue} placeholder='Напишите сообщение...' rows={3} cols={67}></textarea>
                {textareaValue.length > 0 ? 
                    <img src={img} alt='img' className='send-box' onClick={handleSendBoxClick} />
                    : 
                    <></>
                }
            </div>
        </div>
    )
})