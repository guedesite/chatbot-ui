import { FolderInterface } from '@/types/folder';

import { AI } from '@/types/AI';

export const saveFolders = (AI:AI, folders: FolderInterface[]) => {
  localStorage.setItem(AI.name+'_folders', JSON.stringify(folders));
};
