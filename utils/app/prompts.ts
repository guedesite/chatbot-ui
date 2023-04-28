import { Prompt } from '@/types/prompt';

import { AI } from '@/types/AI';

export const updatePrompt = (AI:AI, updatedPrompt: Prompt, allPrompts: Prompt[]) => {
  const updatedPrompts = allPrompts.map((c) => {
    if (c.id === updatedPrompt.id) {
      return updatedPrompt;
    }

    return c;
  });

  savePrompts(AI, updatedPrompts);

  return {
    single: updatedPrompt,
    all: updatedPrompts,
  };
};

export const savePrompts = (AI:AI, prompts: Prompt[]) => {
  localStorage.setItem(AI.name+'_prompts', JSON.stringify(prompts));
};
