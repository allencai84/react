'use client';
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
} from 'lucide-react';
import SidebarItem from './item';

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Todo List',
    path: '/todolist',
    icon: BadgeDollarSign,
  },
  // {
  //   name: 'Payment',
  //   path: '/payment',
  //   icon: WalletCards,
  // },
  // {
  //   name: 'Accounts',
  //   path: '/accounts',
  //   icon: CircleUserRound,
  // },
  // {
  //   name: 'Settings',
  //   path: '/settings',
  //   icon: Settings,
  //   items: [
  //     {
  //       name: 'General',
  //       path: '/settings',
  //     },
  //     {
  //       name: 'Security',
  //       path: '/settings/security',
  //     },
  //     {
  //       name: 'Notifications',
  //       path: '/settings/notifications',
  //     },
  //   ],
  // },
];

import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex items-center space-x-2">
          <Image
            src="/favicon.ico" // 路徑
            alt="Logo" // 替代文字
            width={30} // 寬度
            height={30} // 高度
          />
          <span>Allencai</span>
        </div>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
