import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ChatId } from './types/types';
export declare class MessagesController {
    private readonly messagesService;
    constructor(messagesService: MessagesService);
    create(createMessageDto: CreateMessageDto): Promise<import("./entities/message.entity").Message>;
    search(chatId: ChatId): Promise<import("./entities/message.entity").Message[]>;
}
