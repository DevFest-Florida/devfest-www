import { footerData as footer } from '~/navigation';
import { getPermalink } from '~/utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Tampa',
      href: getPermalink('/tampa'),
    },
    // {
    //   text: 'Speakers',
    //   href: getPermalink('/tampa/speakers'),
    // },
    {
      text: 'Sponsors',
      href: getPermalink('/tampa/sponsors'),
    },
    // {
    //   text: 'Schedule',
    //   href: getPermalink('/tampa/schedule'),
    // },
    {
      text: 'Location',
      href: getPermalink('/tampa/location'),
    },
  ],
};

export const footerData = footer;
