import { MenuItemType } from '@paljs/ui/types';

const CARD_URL = {
  partners: 'partners',
  investments: 'investments',
  hiring: 'hiring',
  products: 'products',
};

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
        link: { href: '/admin/panel/dd/pages/FSC' },
      },
      {
        title: 'Pengajar',
        link: { href: '/admin/panel/dd/pages/Ecosystem' },
      },
    ],
  },
  {
    title: 'Data',
    icon: { name: 'browser-outline' },
    children: [
      {
        title: 'Pengajar',
        link: { href: `/admin/panel/dd/${CARD_URL.partners}` },
      },
       {
        title: 'Galeri',
        link: { href: `/admin/panel/dd/galeri` },
      },
     
    ],
  },
];

export default items;
