import { HomeIcon } from '@/components/icons/home-icon';
import { InvestmentIcon } from '@/components/icons/investment-icon';
import { SettingIcon } from '@/components/icons/setting-icon';
import { WalletIcon } from '@/components/icons/wallet-icon';

export const LINKS = [
  {
    href: '/home',
    value: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    href: '/investment',
    value: 'Inversiones',
    icon: <InvestmentIcon />,
  },
  {
    href: '/wallet',
    value: 'Billetera',
    icon: <WalletIcon />,
  },
  {
    href: '/setting',
    value: 'Configuración',
    icon: <SettingIcon />,
  },
];