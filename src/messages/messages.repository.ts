import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages;
  }

  async create(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
