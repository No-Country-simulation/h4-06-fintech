import {
  ChartAreaIcon,
  GanttChartIcon,
  Home,
  SettingsIcon,
  Wallet2Icon,
} from 'lucide-react';

export const items = [
  {
    title: 'Inicio',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Wallet',
    url: '#',
    icon: Wallet2Icon,
  },
  {
    title: 'Portfolio',
    url: '#',
    icon: GanttChartIcon,
  },
  {
    title: 'Gestion de inversiones',
    url: '#',
    icon: ChartAreaIcon,
  },
  {
    title: 'Configuracion',
    url: '/setting',
    icon: SettingsIcon,
  },
];
