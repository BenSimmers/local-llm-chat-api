import type { CoreMessage } from 'ai';

export default class MessageService {
  private messageHistory: CoreMessage[] = [];

  getMessageHistory() {
    return this.messageHistory;
  }

  writeMessageHistory(messages: CoreMessage[]) {
    this.messageHistory = messages;
  }
}
