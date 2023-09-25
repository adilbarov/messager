import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { ChatId } from './types/types';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @Get()
  search(@Query('chatId') chatId: ChatId) {
    return this.messagesService.search({chatId});
  }
}
