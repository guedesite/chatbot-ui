import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { Conversation } from '@/types/chat';
import { SupportedExportFormats } from '@/types/export';
import { PluginKey } from '@/types/plugin';

import { ChatbarInitialState } from './Chatbar.state';


import { AI } from '@/types/AI';

export interface ChatbarContextProps {
  state: ChatbarInitialState;
  dispatch: Dispatch<ActionType<ChatbarInitialState>>;
  handleDeleteConversation: (AI:AI, conversation: Conversation) => void;
  handleClearConversations: (AI:AI) => void;
  handleExportData: (AI:AI) => void;
  handleImportConversations: (AI:AI, data: SupportedExportFormats) => void;
  handlePluginKeyChange: (AI:AI, pluginKey: PluginKey) => void;
  handleClearPluginKey: (AI:AI, pluginKey: PluginKey) => void;
  handleApiKeyChange: (AI:AI, apiKey: string) => void;
  AI: AI;
}

const ChatbarContext = createContext<ChatbarContextProps>(undefined!);

export default ChatbarContext;
