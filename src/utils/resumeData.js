import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SmsIcon from '@material-ui/icons/Sms';
import GitHubIcon from '@material-ui/icons/GitHub';


const data = {
  name: "Aaa",
  title: "Bbb",

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
   "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. \n\nNhững chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn.",

   experiences: [
    {
      title: "Work 1",
      date: "2017 - 01/2018",
      description: "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. Những chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn",
    },
    {
      title: "Work 2",
      date: "1/2018 - 06/2018",
      description: "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. Những chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn",
    },
    {
      title: "Work 3",
      date: "07/2018 - Present",
      description: "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. Những chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn",
    },
   ],
   education: [
    {
      title: "Education 1",
      date: "2012 - 12/2016",
      description: "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. Những chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn",
    },
    {
      title: "Education 2",
      date: "10/2020",
      description: "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. Những chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn",
    },
   ],
   
  services: [
    {
      title: "Web-developer",
      description: "Develop web so beautiful on develop web so many beautiful hahaaaa develop web so beautiful Develop web so beautiful by byyyy Develop web so beautiful",
      icon: <SmsIcon />
    },

    {
      title: "Web-developer",
      description: "Develop web so beautiful",
      icon: <SmsIcon />
    },

    {
      title: "Web-developer",
      description: "Develop web so beautiful",
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
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/diy-paper-flowers-1582662788.jpg?crop=0.631xw:0.945xh;0.0128xw,0.0504xh&resize=640:*/',
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
