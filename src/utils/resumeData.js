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

  about:
   "Không chỉ có hoa mai, hoa đào mới được người ta yêu mến mà cây quất cũng là linh hồn, là đặc trưng của mỗi mùa Tết đến Xuân về. \n\nNhững chùm quất rực rỡ, căng tràn như đại diện cho mong ước về một năm mới ấm no, đầy đủ hơn.",

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


  ]
}

export default data;