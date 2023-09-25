import { makeAutoObservable } from "mobx";
import { RootStore } from "../store/root.store";
import { MessagesStore } from "./messages.store";
import { MessageApi } from "../api/entities/message/message.api";
import { MessageSchema } from "../api/entities/message/message.types";
import { format } from "date-fns";

export class MessagesService {
    private readonly messageApi: MessageApi

    constructor(private readonly rootStore: RootStore, private readonly messagesStore: MessagesStore) {
        this.messageApi = rootStore.api.messageApi
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setUserId(id: number) {
        this.messagesStore.userId = id
    }

    setChatId(id: number) {
        this.messagesStore.chatId = id
    }

    setList(messages: MessageSchema[]) {
        this.messagesStore.list = messages
    }

    handleChangeTextareaValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.messagesStore.textareaValue = e.target.value
    }

    async initMessageList(chatId: number) {
        const list = await this.messageApi.search(chatId)
        this.messagesStore.list = list
    }

    async handleSendBoxClick() {
        const newMessage = {
            title: this.messagesStore.textareaValue,
            userId: this.messagesStore.userId,
            chatId: this.messagesStore.chatId
        }
    
        this.messagesStore.textareaValue = ''
        await this.messageApi.create(newMessage)
        this.initMessageList(this.messagesStore.chatId)
    }

    formatTime(date: string) {
        return format(new Date(date), 'HH:mm')
    }
}