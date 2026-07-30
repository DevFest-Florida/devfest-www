import { footerData as footer } from '~/navigation';
import { getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/2025'),
    },
    {
      text: 'Keynote',
      href: getPermalink('/2025/keynote'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/2025/speakers'),
    },
    {
      text: 'Inspiration',
      href: getPermalink('/2025/inspiration'),
    },
    {
      text: 'Schedule',
      href: getPermalink('/2025/schedule'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Sponsors',
      href: getPermalink('/2025/sponsors'),
    },
  ],
};

export const footerData = footer;
