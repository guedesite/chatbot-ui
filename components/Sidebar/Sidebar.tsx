import { IconFolderPlus, IconMistOff, IconPlus } from '@tabler/icons-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';



import { AI } from '@/types/AI';

import {
  CloseSidebarButton,
  OpenSidebarButton,
} from './components/OpenCloseButton';

import Search from '../Search';

interface Props<T> {
  isOpen: boolean;
  addItemButtonTitle: string;
  switchInterfaceTitle: string;
  side: 'left' | 'right';
  items: T[];
  itemComponent: ReactNode;
  folderComponent: ReactNode;
  footerComponent?: ReactNode;
  searchTerm: string;
  handleSearchTerm: (AI:AI, searchTerm: string) => void;
  toggleOpen: (AI:AI) => void;
  handleCreateItem: (AI:AI) => void;
  handleCreateFolder: (AI:AI) => void;
  handleSwitchAI: (AI:AI) => void;
  handleDrop: (AI:AI, e: any) => void;
  AI:AI;
}

const Sidebar = <T,>({
  isOpen,
  addItemButtonTitle,
  switchInterfaceTitle,
  side,
  items,
  itemComponent,
  folderComponent,
  footerComponent,
  searchTerm,
  handleSearchTerm,
  toggleOpen,
  handleCreateItem,
  handleCreateFolder,
  handleSwitchAI,
  handleDrop,
  AI,
}: Props<T>) => {
  const { t } = useTranslation('promptbar');

  const allowDrop = (AI:AI, e: any) => {
    e.preventDefault();
  };

  const highlightDrop = (AI:AI, e: any) => {
    e.target.style.background = '#343541';
  };

  const removeHighlight = (AI:AI, e: any) => {
    e.target.style.background = 'none';
  };
  return isOpen ? (
    <div>
      <div
        className={`fixed top-0 ${side}-0 z-40 flex h-full w-[260px] flex-none flex-col space-y-2 bg-[#202123] p-2 text-[14px] transition-all sm:relative sm:top-0`}
      >
        { side === 'left' && (
          <div className="flex items-center">
            <button
              className="text-sidebar w-full flex-1 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10"
              onClick={() => {
                
                handleSwitchAI(AI);
              }}
            >
              {switchInterfaceTitle}
            </button>
          </div>
        )}
        <div className="flex items-center">
          <button
            className="text-sidebar flex w-[190px] flex-shrink-0 cursor-pointer select-none items-center gap-3 rounded-md border border-white/20 p-3 text-white transition-colors duration-200 hover:bg-gray-500/10"
            onClick={() => {
              handleCreateItem(AI);
              handleSearchTerm(AI,'');
            }}
          >
            <IconPlus size={16} />
            {addItemButtonTitle}
          </button>

          <button
            className="ml-2 flex flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-sm text-white transition-colors duration-200 hover:bg-gray-500/10"
            onClick={() => handleCreateFolder(AI)}
          >
            <IconFolderPlus size={16} />
          </button>
        </div>
        <Search
          placeholder={t('Search...') || ''}
          searchTerm={searchTerm}
          onSearch={(evt)=>handleSearchTerm(AI, evt)}
          AI={AI}
        />

        <div className="flex-grow overflow-auto">
          {items?.length > 0 && (
            <div className="flex border-b border-white/20 pb-2">
              {folderComponent}
            </div>
          )}

          {items?.length > 0 ? (
            <div
              className="pt-2"
              onDrop={(evt) => handleDrop(AI, evt)}
              onDragOver={(evt) =>allowDrop(AI, evt)}
              onDragEnter={(evt) =>highlightDrop}
              onDragLeave={(evt) =>removeHighlight}
            >
              {itemComponent}
            </div>
          ) : (
            <div className="mt-8 select-none text-center text-white opacity-50">
              <IconMistOff className="mx-auto mb-3" />
              <span className="text-[14px] leading-normal">
                {t('No data.')}
              </span>
            </div>
          )}
        </div>
        {footerComponent}
      </div>

      <CloseSidebarButton onClick={toggleOpen} side={side} />
    </div>
  ) : (
    <OpenSidebarButton onClick={toggleOpen} side={side} />
  );
};

export default Sidebar;
