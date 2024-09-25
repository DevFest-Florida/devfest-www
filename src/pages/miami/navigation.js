import { footerData as footer } from '~/navigation';
import { getBlogPermalink, getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Miami',
      href: getPermalink('/miami'),
    },
    // {
    //   text: 'Speakers',
    //   href: getPermalink('/miami/speakers'),
    // },
    {
      text: 'Sponsors',
      href: getPermalink('/miami/sponsors'),
    },
    {
      text: 'Schedule',
      href: getPermalink('/miami/schedule'),
    },
    {
      text: 'Location',
      href: getPermalink('/miami/location'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = footer;
