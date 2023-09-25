import { makeAutoObservable } from "mobx";
import { MessagesService } from "./messages.service";
import { RootStore } from "../store/root.store";
import { MessageSchema } from "../api/entities/message/message.types";

export class MessagesStore {
    public list: MessageSchema[] = []

    public textareaValue: string = ''

    public userId: number = 0

    public chatId: number = 0

    public lastMessageDate: string = ''

    public readonly services: MessagesService

    constructor(private readonly rootStore: RootStore) {
        this.services = new MessagesService(rootStore, this)
        makeAutoObservable(this, {}, {autoBind: true})
    }
}