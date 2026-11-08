import { footerData as footer } from '~/navigation';
import { getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Orlando',
      href: getPermalink('/'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/speakers'),
    },
    {
      text: 'Keynote',
      href: getPermalink('/keyNote'),
    },    
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
      href: getPermalink('/blog'),
    },
  ],
  actions: [
    {
      variant: 'primary',
      text: 'Buy a Ticket!',
      href: 'https://www.eventbrite.com/e/935541117667?aff=oddtdtcreator',
      icon: 'tabler:square-rounded-arrow-right',
      target: '_blank',
    },
  ],
};

export const footerData = footer;
