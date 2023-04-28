import { FC } from 'react';

import { Prompt } from '@/types/prompt';

import { PromptComponent } from './Prompt';

import {AI} from '@/types/AI';

interface Props {
  prompts: Prompt[];
  AI:AI;
}

export const Prompts: FC<Props> = ({ prompts, AI }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      {prompts
        .slice()
        .reverse()
        .map((prompt, index) => (
          <PromptComponent AI={AI} key={index} prompt={prompt} />
        ))}
    </div>
  );
};
