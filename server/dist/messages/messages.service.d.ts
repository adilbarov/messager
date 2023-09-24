import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
export declare class MessagesService {
    private readonly messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(createMessageDto: CreateMessageDto): Promise<Message>;
    search(): Promise<Message[]>;
}
