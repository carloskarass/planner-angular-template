import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Panel Adminvo',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/rectangle-stack.svg',
          label: 'Catálogos',
          route: '/beverages',
          children: [
            { icon: 'assets/icons/heroicons/outline/beverage.svg', label: 'Bebidas', route: '/admin-panel/beverages' },
            { label: 'Mantelería', route: '/admin-panel/table-linen' },
            { label: 'Tipos de Evento', route: '/admin-panel/event-type' },
            { label: 'Tipos de Plantilla', route: '/admin-panel/template-type' },
            { label: 'Invitados', route: '/admin-panel/guest' },
            { label: 'Anfitriones', route: '/admin-panel/host' },
            { label: 'Eventos', route: '/admin-panel/event' },
            { label: 'Sección de Plantilla', route: '/admin-panel/template-section' },
            { label: 'Plantillas', route: '/admin-panel/template' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
      ],
    },
    // {
    //   group: 'Collaboration',
    //   separator: true,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/download.svg',
    //       label: 'Download',
    //       route: '/download',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/gift.svg',
    //       label: 'Gift Card',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/users.svg',
    //       label: 'Users',
    //       route: '/users',
    //     },
    //   ],
    // },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/gift',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Folders',
          route: '/folders',
          children: [
            { label: 'Current Files', route: '/folders/current-files' },
            { label: 'Downloads', route: '/folders/download' },
            { label: 'Trash', route: '/folders/trash' },
          ],
        },
      ],
    },
  ];
}
