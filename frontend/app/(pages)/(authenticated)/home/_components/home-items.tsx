import { ExpensesIcon, IncomeIcon, InvestmentIcon, SavingsIcon, TargetFinanceIcon } from "./svg/home-svg";

export const homeItems = [
    {
        title: 'Ingresos',
        url: '/home',
        icon: IncomeIcon,
        totaldeposits: '$50.000',
        percentage: '120%',
        background: 'bg-[#02B15AB2]',
    },
    {
        title: 'Gastos',
        url: '/home',
        icon: ExpensesIcon,
        totalexpenses: '$50.000',
        percentage: '120%',
        background: 'bg-[#ED2400B2]',
    },
    {
        title: 'Mis Objetivos',
        url: '/financial-target',
        icon: TargetFinanceIcon,
        background: 'bg-[#0697F2B2]',
       
        
    },
    {
        title: 'Inversiones',
        url: '/investment',
        icon: InvestmentIcon,
        background: 'bg-[#5503A6B2]',
    },
    {
        title: 'Mis Ahorros',
        url: '/home',
        icon: SavingsIcon,
        background: 'bg-[#F25C79B2] ',
    }
]