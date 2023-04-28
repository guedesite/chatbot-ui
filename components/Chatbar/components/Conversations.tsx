import { Conversation } from '@/types/chat';

import { ConversationComponent } from './Conversation';

import { AI } from '@/types/AI';

interface Props {
  conversations: Conversation[];
  AI:AI;
}

export const Conversations = ({ conversations, AI }: Props) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {conversations
        .filter((conversation) => !conversation.folderId)
        .slice()
        .reverse()
        .map((conversation, index) => (
          <ConversationComponent AI={AI} key={index} conversation={conversation} />
        ))}
    </div>
  );
};
