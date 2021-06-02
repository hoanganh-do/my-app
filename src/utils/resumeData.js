import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SmsIcon from '@material-ui/icons/Sms';
import GitHubIcon from '@material-ui/icons/GitHub';


const data = {
  name: "Ah",
  title: "f-Test",

  birthday: "06th December 2002",
  email: "abc@yahoo.com",
  address: "123 Test Str",
  phone: "123 456 7890",

  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "fb",
      icon: <FacebookIcon />,
    },

    linkedin: {
      link: "https://www.linkedin.com",
      text: "lIn",
      icon: <LinkedInIcon />,
    },

    skype: {
      link: "https://www.skype.com",
      text: "skp",
      icon: <SmsIcon />,
    },
  },

  about:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

   experiences: [
    {
      title: "Work 1",
      date: "2017 - 01/2018",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Work 2",
      date: "1/2018 - 06/2018",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Work 3",
      date: "07/2018 - Present",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
   ],
   education: [
    {
      title: "Education 1",
      date: "2012 - 12/2016",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      title: "Education 2",
      date: "10/2020",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
   ],
   
  services: [
    {
      title: "Web-developer",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      icon: <SmsIcon />
    },

    {
      title: "Web-developer",
      description: "Excepteur sint occaecat cupidatat",
      icon: <SmsIcon />
    },

    {
      title: "Web-developer",
      description: "Excepteur sint occaecat cupidatat",
      icon: <SmsIcon />
    },
  ],

  skills: [
    {
      title: "Front_End",
      description: [
        "HTML",
        "CSS",
        "Material UI",
        "ReactJS",
      ]
    },
    {
      title: "Back_End",
      description: [
        "Nodejs",
        "ExpressJS",
        "NextJS"
      ],
    },
    {
      title: "Databases",
      description: [
        "Firebase",
        "MongoDB"
      ],
    },
    {
      title: "Source_Control",
      description: [
        "Scrum/Agile",
        "GitHub"
      ],
    },


  ],
  projects: [
    {
      tag: 'React',
      image: 'https://img.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg?size=626&ext=jpg',
      title: 'Project 1',
      caption: 'A short description',
      description: 'This is my project description. Please fill it in.',
      links: [
        {
          link: 'https://github.com/hoanganh-do/my-app', icon: <GitHubIcon />,
          link: 'https://github.com/hoanganh-do/my-app', icon: <GitHubIcon />,
          link: 'https://github.com/hoanganh-do/my-app', icon: <GitHubIcon />,
        }
      ]
    },

    {
      tag: 'React',
      image: '',
      title: 'Project 1',
      description: 'This is my project description. Please fill it in.',
      links: [
        {
          link: 'https://www.google.com', icon: <SmsIcon />,
          link: 'https://www.google.com', icon: <SmsIcon />,
          link: 'https://www.google.com', icon: <SmsIcon />,
        }
      ]
    },

    {
      tag: 'Nodejs',
      image: '',
      title: 'Project 2',
      description: 'This is my project description. Please fill it in.',
      links: [
        {
          link: 'https://www.google.com', icon: <SmsIcon />,
          link: 'https://www.google.com', icon: <SmsIcon />,
          link: 'https://www.google.com', icon: <SmsIcon />,
        }
      ]
    }
  ]
}

export default data;
