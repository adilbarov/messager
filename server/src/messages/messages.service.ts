import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { ChatQuery } from './types/types';

@Injectable()
export class MessagesService {
  public constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    return await this.messageRepository.save(this.messageRepository.create({ 
      title: createMessageDto.title, 
      userId: createMessageDto.userId, 
      chatId: createMessageDto.chatId 
    }))
  }

  async search(query: ChatQuery): Promise<Message[]> {
    return await this.messageRepository.find({
      where: {chatId: query.chatId},
      order: {id: 'ASC'}
    })
  }
}
