import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { Conversation } from '@/types/chat';
import { KeyValuePair } from '@/types/data';
import { FolderType } from '@/types/folder';

import { AI } from '@/types/AI';

import { HomeInitialState } from './home.state';

export interface HomeContextProps {
  state: HomeInitialState;
  dispatch: Dispatch<ActionType<HomeInitialState>>;
  handleNewConversation: (AI: AI) => void;
  handleCreateFolder: (AI: AI, name: string, type: FolderType) => void;
  handleDeleteFolder: (AI: AI, folderId: string) => void;
  handleUpdateFolder: (AI: AI, folderId: string, name: string) => void;
  handleSelectConversation: (AI: AI, conversation: Conversation) => void;
  handleUpdateConversation: (
    AI: AI,
    conversation: Conversation,
    data: KeyValuePair,
  ) => void;
}

const HomeContext = createContext<HomeContextProps>(undefined!);

export default HomeContext;
