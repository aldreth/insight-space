export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Insight Space';
export const siteDescription =
  'Leadership and Team insight Coaching, for those looking to contribute to the future of our world.  Tapping into inherent knowing, insight and wisdom.  Coaching for a time between worlds.';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Fay Andrews-Hodgson', // i.e. Lene Saile - page / blog author's name. Must be set.
  avatar: '/fay.jps', // path to the author's avatar. In this case just using a favicon.
  email: 'fay@insightspace.co.uk', // i.e. fay@insightspace.co.uk - email of the author
  website: 'https://insightspace.co.uk' // i.e. https.://www.lenesaile.com - the personal site of the author
};
export const creator = {
  name: 'Fay Andrews-Hodgson', // i.e. Lene Saile - creator's (developer) name.
  email: 'fay@insightspace.co.uk',
  website: 'https://insightspace.co.uk'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#dd4462'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default = '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  'Leadership and Team insight Coaching, for those looking to contribute to the future of our world.  Tapping into inherent knowing, insight and wisdom.  Coaching for a time between worlds.'; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'My Web Development Blog',
  description: 'Tell the word what you are writing about in your blog. It will show up on feed readers.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = false;
