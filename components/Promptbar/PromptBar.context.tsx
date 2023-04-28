import { Dispatch, createContext } from 'react';

import { ActionType } from '@/hooks/useCreateReducer';

import { Prompt } from '@/types/prompt';

import { PromptbarInitialState } from './Promptbar.state';

import { AI } from '@/types/AI';

export interface PromptbarContextProps {
  state: PromptbarInitialState;
  dispatch: Dispatch<ActionType<PromptbarInitialState>>;
  handleCreatePrompt: (AI:AI) => void;
  handleDeletePrompt: (AI:AI, prompt: Prompt) => void;
  handleUpdatePrompt: (AI:AI, prompt: Prompt) => void;
}

const PromptbarContext = createContext<PromptbarContextProps>(undefined!);

export default PromptbarContext;
