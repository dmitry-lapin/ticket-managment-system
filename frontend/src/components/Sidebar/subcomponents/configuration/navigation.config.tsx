import {
  Home,
  Ticket,
  LifeBuoy,
  Building2,
  BarChart,
  Shield,
  Bell,
  MessageCircleQuestionMark
} from 'lucide-react'

export type NavigationItem = {
  title: string
  path: string
  icon: React.ElementType
}

export const upperNavigationItems: NavigationItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: Home
  },
  {
    title: 'Tickets',
    path: '/tickets',
    icon: Ticket
  },
  {
    title: 'Support',
    path: '/support',
    icon: LifeBuoy
  },
  {
    title: 'Organisations',
    path: '/organisations',
    icon: Building2
  },
  {
    title: 'Reporting',
    path: '/reports',
    icon: BarChart
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: Shield
  }
]

export const lowerNavigationItems: NavigationItem[] = [
  {
    title: 'Notifications',
    path: '/notifications',
    icon: Bell
  },
  {
    title: 'Help Center',
    path: '/help-center',
    icon: MessageCircleQuestionMark
  }
];