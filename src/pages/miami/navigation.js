import { footerData as footer } from '~/navigation';
import { getBlogPermalink, getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Miami',
      href: getPermalink('/'),
    },
    // {
    //   text: 'Speakers',
    //   href: getPermalink('/miami/speakers'),
    // },
    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
    },
    {
      text: 'Schedule',
      href: getPermalink('/schedule'),
    },
    {
      text: 'Location',
      href: getPermalink('/location'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
};

export const footerData = footer;
