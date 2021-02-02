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
  }


}

export default data;