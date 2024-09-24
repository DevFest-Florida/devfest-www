import { footerData as footer } from '~/navigation';
import { getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Orlando',
      href: getPermalink('/orlando'),
    },
    {
      text: 'Speakers',
      href: getPermalink('/orlando/speakers'),
    },
    {
      text: 'Keynote',
      href: getPermalink('/orlando/keyNote'),
    },    
    {
      text: 'Sponsors',
      href: getPermalink('/orlando/sponsors'),
    },
    {
      text: 'Schedule',
      href: getPermalink('/orlando/schedule'),
    },
    {
      text: 'Location',
      href: getPermalink('/orlando/location'),
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
