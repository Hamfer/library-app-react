import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

import ButtonThemeToggler from '@/components/ButtonThemeToggler';
import DashboardLogo from '@/components/DashboardLogo';
import SearchSelect from '@/components/SearchSelect';

interface Props {
  onBurgerClick: () => void;
}

const NavHeader: React.FC<Props> = ({onBurgerClick}) => {
  return (
    <header className="sticky top-0 z-10 w-full bg-white py-3 shadow-xl transition-all dark:bg-little-dark-surface">
      <nav className="flex flex-col px-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 font-bold dark:text-white">
            <button type="button" className="lg:hidden" onClick={onBurgerClick}>
              <FontAwesomeIcon icon="bars" />
            </button>
            <button
              type="button"
              className="flex items-center text-xs lg:text-sm">
              All Categories
              <FontAwesomeIcon icon="caret-down" className="ml-2" />
            </button>
            <button
              type="button"
              className="flex items-center text-xs lg:text-sm">
              All Time
              <FontAwesomeIcon icon="caret-down" className="ml-2" />
            </button>
          </div>
          <div className="my-2 hidden items-center rounded-full border border-lighter-gray px-4 text-sm text-light-gray dark:text-white lg:flex">
            <SearchSelect />
          </div>
          <div className="flex items-center">
            <DashboardLogo />
            <h2 className="hidden pl-2 text-base font-bold dark:text-white lg:inline lg:text-xl">
              Library
            </h2>
            <ButtonThemeToggler />
          </div>
        </div>
        <div className="mt-2 flex w-full items-center rounded-full border border-lighter-gray px-4 text-xs text-light-gray dark:text-white lg:hidden lg:text-base">
          <SearchSelect />
        </div>
      </nav>
    </header>
  );
};

export default NavHeader;
