import { Settings } from '@/types/settings';

import {AI} from '@/types/AI';

const STORAGE_KEY = 'settings';

export const getSettings = (AI:AI): Settings => {
  let settings: Settings = {
    theme: 'dark',
  };
  const settingsJson = localStorage.getItem(AI.name+'_'+STORAGE_KEY);
  if (settingsJson) {
    try {
      let savedSettings = JSON.parse(settingsJson) as Settings;
      settings = Object.assign(settings, savedSettings);
    } catch (e) {
      console.error(e);
    }
  }
  return settings;
};

export const saveSettings = (AI:AI, settings: Settings) => {
  localStorage.setItem(AI.name+'_'+STORAGE_KEY, JSON.stringify(settings));
};
