'use client';

import { MainMenu } from './main-menu';

interface HeaderProps {
  isBackVisible: boolean;
  onBack?: any;
}

export function Header({ isBackVisible, onBack }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between py-0 px-5 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex items-center">
        <MainMenu isBackVisible={isBackVisible} onBack={onBack} />
      </div>
    </nav>
  );
}
