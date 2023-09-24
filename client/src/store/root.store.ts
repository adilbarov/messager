import { makeAutoObservable } from "mobx";
import { ApiStore } from "../api/api-store/api.store";
import { MessagesStore } from "../components/messages.store";

export class RootStore {
    public readonly api: ApiStore

    public readonly messagesStore: MessagesStore

    constructor() {
        this.api = new ApiStore()
        this.messagesStore = new MessagesStore(this)
        
        makeAutoObservable(this, {}, {autoBind: true})
    }
}