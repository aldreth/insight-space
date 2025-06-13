const bottom = [
  {
    text: 'Imprint',
    url: '/imprint/'
  },
  {
    text: 'Privacy',
    url: '/privacy/'
  }
];

if (process.env.NODE_ENV == 'development') {
  bottom.unshift({
    text: 'Style guide',
    url: '/styleguide/'
  });
}

export default {
  top: [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'About',
      url: '/about/'
    },
    {
      text: 'Exec coaching',
      url: '/exec-coaching/'
    },
    {
      text: 'Team/Group coaching',
      url: '/team-coaching/'
    },
    {
      text: 'Organisational Development',
      url: '/organisational-development/'
    },
    {
      text: 'Contact',
      url: '/contact/'
    }
  ],
  bottom
};
