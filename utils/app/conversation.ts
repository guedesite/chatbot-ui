import { Conversation } from '@/types/chat';

import { AI } from '@/types/AI';

export const updateConversation = (
  AI:AI,
  updatedConversation: Conversation,
  allConversations: Conversation[],
) => {
  const updatedConversations = allConversations.map((c) => {
    if (c.id === updatedConversation.id) {
      return updatedConversation;
    }

    return c;
  });

  saveConversation(AI,updatedConversation);
  saveConversations(AI,updatedConversations);

  return {
    single: updatedConversation,
    all: updatedConversations,
  };
};

export const saveConversation = (AI:AI,conversation: Conversation) => {
  localStorage.setItem(AI.name+'_selectedConversation', JSON.stringify(conversation));
};

export const saveConversations = (AI:AI,conversations: Conversation[]) => {
  localStorage.setItem(AI.name+'_conversationHistory', JSON.stringify(conversations));
};
