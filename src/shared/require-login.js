module.exports = async function requireLogin(req) {
  if (!req.session.person) {
    return {
      location: `/login`,
    };
  }
};
