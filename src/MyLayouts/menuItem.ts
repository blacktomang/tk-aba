import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Home Page',
    icon: { name: 'home' },
    link: { href: '/admin/panel/dd/' },
  },
  {
    title: 'List Content',
    group: true,
  },
   {
    title: 'Web Data',
    icon: { name: 'settings-2-outline' },
    link: { href: '/admin/panel/dd/data' },
  },
  {
    title: 'Halaman',
    icon: { name: 'file-outline' },
    children: [
      {
        title: 'Beranda',
        link: { href: '/admin/panel/dd/pages/Home' },
      },
      {
        title: 'Tentang Kami',
        link: { href: '/admin/panel/dd/pages/About' },
      },
      {
        title: 'Galeri',
        link: { href: '/admin/panel/dd/pages/Galery' },
      },
      {
        title: 'Pengajar',
        link: { href: '/admin/panel/dd/pages/Pengajar' },
      },
    ],
  },
  {
    title: 'Data',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Pengajar',
        link: { href: `/admin/panel/dd/data-pengajar` },
      },
       {
        title: 'Galeri',
        link: { href: `/admin/panel/dd/data-galeri` },
      },
     
    ],
  },
];

export default items;
