// gitprofile.config.js

const config = {
  github: {
    username: 'zumlabs', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zums',
    twitter: 'zums_developer',
    mastodon: '',
    facebook: '',
    instagram: 'qhorrzuma',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://zumlabs.site',
    phone: '',
    email: 'zums.personal@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1nu3ohjp-gPWPoBbwVBbhvrnnfWD2thao/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'MySQL',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Git',
  ],
  experiences: [
    {
      company: 'Zumlabs Development',
      position: 'Software Engineering',
      from: 'January 2023',
      to: 'Present',
      companyLink: 'https://zumlabs.site',
    },
    {
      company: 'PT Inti Cakrawala Citra',
      position: 'Inventory Checker',
      from: 'Juni 2022',
      to: 'September 2022',
      companyLink: '',
    },
    {
      company: 'PT Inti Cakrawala Citra',
      position: 'Operator Forklift',
      from: 'August 2019',
      to: 'Juni 2022',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Software Engineering',
      body: 'Revou Mini Course',
      year: 'March 2023',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: 'Universitas Terbuka',
      degree: 'Computer Science',
      from: '2022',
      to: '2025',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Content Management Systems',
      description:
        'a news website using the open source wordpress which is being developed again to make it even better.',
      imageUrl: 'https://www.cryptozums.space/wp-content/uploads/2022/11/cropped-1668722046-picsayajsj.png',
      link: 'https://cryptozums.space',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
