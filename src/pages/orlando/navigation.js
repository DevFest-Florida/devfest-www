import { footerData as footer } from '~/navigation';
import { getBlogPermalink, getPermalink } from '../../utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Orlando',
      href: getPermalink('/orlando')
    },
    {
      text: 'Speakers',
      href: getPermalink('/orlando/speakers')
    },    
    {
      text: 'Sponsors',
      href: getPermalink('/orlando/sponsors')
    },
    {
      text: 'Schedule',
      href: getPermalink('/orlando/schedule')
    },    
    {
      text: 'Location',
      href: getPermalink('/orlando/location')
    },    
    {
      text: 'Blog',
      href: getBlogPermalink()
    },

  

  ],
};

export const footerData = footer;
