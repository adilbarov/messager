import { ApiClient } from "../../api-client/api-client";
import { MessageCreateSchema, MessageSchema } from "./message.types";

export class MessageApi extends ApiClient {
    public constructor(baseUrl: string) {
        super(baseUrl)
    }

    public async search(signal?: AbortSignal): Promise<MessageSchema[]> {
        return await this.get('/messages', signal)
    }

    public async create(body: MessageCreateSchema, signal?: AbortSignal): Promise<MessageSchema> {
        return await this.post('/messages', body, signal)
    }
}