import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },   
    {
      text: 'Blog',
      href: getBlogPermalink()
    },
    {
      text: 'Orlando',
      href: getPermalink('/orlando')
    },  
    {
      text: 'Tampa',
      href: getPermalink('/tampa')
    },  
    {
      text: 'Miami',
      href: getPermalink('/miami')
    },  

  

  ],
};

export const footerData = {
  links: [
    {
      title: 'Resources',
      links: [
        { text: 'Google Developer Groups', href: 'https://developers.google.com/community/gdg' },
        { text: 'Women Techmakers', href: 'https://developers.google.com/womentechmakers' },
        { text: 'Google Developer Student Clubs', href: 'https://developers.google.com/community/gdsc' },
        { text: 'Google Developer Experts', href: 'https://developers.google.com/community/experts' },
        { text: 'Google Cloud Innovators', href: 'https://cloud.google.com/innovators' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'Email', href: 'mailto:organizers@devfestflorida.com' },
      ],
    },
    {
      title: 'DevFest Florida',
      links: [
        { text: 'Code of Conduct', href: '/code-of-conduct' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Volunteer', href: '/volunteer' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Orlando', href: getPermalink('/orlando') },
    { text: 'Tampa', href: getPermalink('/tampa') },
    { text: 'Miami', href: getPermalink('/miami') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/devfestfl' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/devfestflorida/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/devfestflorida/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/DevFest-Florida' },
  ],
  
};
