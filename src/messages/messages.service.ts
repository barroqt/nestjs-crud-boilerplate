import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

// Writes into DI container that MessagesService depends on MessagesRepository
@Injectable()
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async findAll() {
    return this.messagesRepository.findAll();
  }

  async create(content: string) {
    return this.messagesRepository.create(content);
  }
}
