import type { CoreMessage } from 'ai';
export default class MessageService {
  private messageHistory;
  getMessageHistory(): CoreMessage[];
  writeMessageHistory(messages: CoreMessage[]): void;
}
