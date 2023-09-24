import { makeAutoObservable } from "mobx";
import { RootStore } from "../store/root.store";
import { MessagesStore } from "./messages.store";
import { MessageApi } from "../api/entities/message/message.api";
import { MessageSchema } from "../api/entities/message/message.types";
import { format } from "date-fns";

export class MessagesService {
    private readonly messageApi: MessageApi

    public textareaValue: string = ''

    public userId: number = 0

    public chatId: number = 0

    public lastMessageDate: string = ''

    constructor(private readonly rootStore: RootStore, private readonly messagesStore: MessagesStore) {
        this.messageApi = rootStore.api.messageApi
        makeAutoObservable(this, {}, {autoBind: true})
    }

    setUserId(id: number) {
        this.userId = id
    }

    setChatId(id: number) {
        this.chatId = id
    }

    setList(messages: MessageSchema[]) {
        this.messagesStore.list = messages
    }

    handleChangeTextareaValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
        this.textareaValue = e.target.value
    }

    async initMessageList() {
        const list = await this.messageApi.search()
        this.messagesStore.list = list
    }

    async handleSendBoxClick() {
        const newMessage = {
            title: this.textareaValue,
            userId: this.userId,
            chatId: this.chatId
        }
    
        this.textareaValue = ''
        await this.messageApi.create(newMessage)
        this.initMessageList()
    }

    formatTime(date: string) {
        return format(new Date(date), 'HH:mm')
    }
}