export default {
  api: {
    url: `${process.env.REACT_APP_API_DOMAIN}/api`,
    login: `${process.env.REACT_APP_API_DOMAIN}/api/login`,
    logout: `${process.env.REACT_APP_API_DOMAIN}/logout`,
    register: `${process.env.REACT_APP_API_DOMAIN}/api/register`,
    sessionUrl: `${process.env.REACT_APP_API_DOMAIN}/sanctum/csrf-cookie`,
  },
  formats: {
    date: {
      long: 'eee d MMMM, yyyy',
    },
  },
};
