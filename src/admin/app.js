import newLogo from './extensions/logo.svg';

export default {
  config: {
    locales: ["tr"],
    auth: {
      logo: newLogo,
    },
    menu: {
      logo: newLogo,
    }, 
    head: {
      favicon: newLogo,
    },
  },
  bootstrap(app){
    console.log(app);
  },
};