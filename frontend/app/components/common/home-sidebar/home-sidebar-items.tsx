import { HelpIcon, SettingsIcon } from './svg/bottom-items';
import {
  CommunityIcon,
  CustomizeIcon,
  FavoriteIcon,
  NotificationIcon,
  ProfileIcon,
  ReminderIcon,
  WalletIcon,
} from './svg/home-sidebar';

export const items = [
  {
    title: 'Perfil',
    url: '/home',
    icon: ProfileIcon,
  },
  {
    title: 'Notificaciones',
    url: '#',
    icon: NotificationIcon,
  },
  {
    title: 'Perzonalizar',
    url: '/customization',
    icon: CustomizeIcon,
  },
  {
    title: 'Favoritos',
    url: '#',
    icon: FavoriteIcon,
  },
  {
    title: 'Billetera',
    url: '/wallet',
    icon: WalletIcon,
  },
  {
    title: 'Recordatorios',
    url: '#',
    icon: ReminderIcon,
  },
  {
    title: 'Comunidad',
    url: '/community',
    icon: CommunityIcon,
  },
];

export const bottomItems = [
  {
    title: 'Configuración',
    url: '/setting',
    icon: SettingsIcon,
  },
  {
    title: 'Ayuda',
    url: '#',
    icon: HelpIcon,
  },
];
