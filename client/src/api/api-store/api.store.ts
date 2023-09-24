import { MessageApi } from "../entities/message/message.api";

export class ApiStore {
    public readonly messageApi: MessageApi
    constructor() {
        this.messageApi = new MessageApi('http://localhost:3001')
    }
}