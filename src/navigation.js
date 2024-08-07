import { getAsset, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/')
    },   
    {
      text: 'Orlando',
      href: getPermalink('/orlando')
    },  
    // {
    //   text: 'Tampa',
    //   href: getPermalink('#')
    // },  
    // {
    //   text: 'Miami',
    //   href: getPermalink('#')
    // },  

    {
      text: 'Sponsors',
      href: getPermalink('/sponsors'),
      target: '_blank',
    },  
    {
      text: 'Blog',
      href: getPermalink('/blog')
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
    { text: 'Orlando 2024', href: getPermalink('/orlando') },
    { text: 'Orlando 2023', href: 'https://2023-orlando.devfestflorida.com/' },
    { text: 'Tampa 2023', href: 'https://2023-tampa.devfestflorida.com/' },
    { text: 'Miami 2023', href: 'https://2023-miami.devfestflorida.com/' },
    { text: 'Miami 2022', href: 'https://2022.devfestflorida.com/' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/devfestfl' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/devfestflorida/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/devfestflorida/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/DevFest-Florida' },
  ],
  
};
