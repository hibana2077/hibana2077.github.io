module.exports = {
  pathPrefix: '/static',
  siteUrl: 'https://hibana2077.github.io',
  title: 'Syuan-Hao Li',
  description: 'Personal Website of Syuan-Hao Li',
  author: 'Syuan-Hao Li',
  authorAlternative: 'Tom',
  introduction: [
    'I am a final year B.Sc. student in Computer Science at National Taitung University, Taiwan.'
  ],
  avatar: 'https://avatars.githubusercontent.com/u/72302793?size=128',
  professions: [
    'Computer Science Student',
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'March 10, 2003',
  location: 'Taipei, Taiwan',
  email: 'hibana2077@gmail.com',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  // disqusScript: process.env.DISQUS_SCRIPT
  //   || 'https://tc-imba.disqus.com/embed.js',
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/hibana2077',
      icon: ['fab', 'github'],
    }, {
      url: 'https://scholar.google.com/',
      icon: ['fab', 'google-scholar'],
    },
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  // wakatime: {
  //   username: 'tcimba',
  //   activity: '7add4047-08f9-4da8-b649-aa114503678f',
  //   language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
  //   editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
  //   os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  // },
  // contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
  //   || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  // googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-ZK3P43DY6M',
  education: [
    {
      date: 'Jan 2020 - Present',
      icon: 'graduation-cap',
      title: 'Ph.D in Computer Science',
      location: 'Some University, Somewhere',
    }, {
      date: 'Sep 2021 - Jun 2025',
      icon: 'university',
      title: 'B.Sc. in Computer Science and Information Engineering',
      location: 'National Taitung University, Taitung, Taiwan',
    }, {
      date: 'Sep 2019 - Jun 2021',
      icon: 'school',
      title: 'High School',
      location: 'National Hualien Senior High School, Hualien, Taiwan',
    }],
  interests: [
    {
      title: 'Medical Image Processing',
      icon: 'stethoscope',
    }, {
      icon: 'layer-group',
      title: 'Full Stack Development',
    }, {
      icon: ['fab', 'linux'],
      title: 'Open Source Community',
    }, {
			icon: 'chart-line',
			title: 'Mathematical Statistics',
		}, {
			icon: 'brain',
			title: 'Learning Theory',
		}],
  experience: [
    {
      title: 'Work Experience',
      position: 'left',
      data: [
        {
          date: 'Sep 2023 - Jan 2024',
          title: 'Learning effect evaluation tool development',
          location: 'National Taitung University',
          description: 'Using Chatbot to quickly evaluate the learning effect of students in the classroom.',
        },
        {
          date: 'Feb 2024 - Jan 2025',
          title: 'Digital TA development',
          location: 'National Taitung University',
          description: 'Applying RAG and LLM to develop a digital TA for students.',
        },
        {
          date: 'Sep 2024 - Feb 2025',
          title: 'National Science and Technology Council project assistant',
          location: 'National Taitung University',
          description: 'Maintaining the website of the project and assisting in the development of the project.',
        },
        {
          date: 'Feb 2025 - Jun 2025',
          title: 'Cathay Holdings DDT Medical Data Analysis Intern',
          location: 'Cathay Holdings, Taipei, Taiwan',
        }
      ],
    }, {
      title: 'Teaching',
      position: 'right',
      data: [
        {
          date: 'Jun 2023',
          title: 'Teaching Assistant of Data Structure',
          location: 'National Taitung University',
        }, {
          date: 'Sep 2022',
          title: 'Teaching Assistant of Algorithm',
          location: 'National Taitung University',
        }
      ],
    },
  ],
  // awards: [
  //   {
  //     date: 'Someday',
  //     title: 'Some Award',
  //   }, {
  //     date: 'Someday',
  //     title: 'Another Award',
  //   },
  // ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};