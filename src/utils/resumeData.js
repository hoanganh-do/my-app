import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SmsIcon from '@material-ui/icons/Sms';


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

  about: "abcdefghijklimnop \n\nqrstuvwzyz",

  services: [
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


  ]
}

export default data;