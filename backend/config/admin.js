module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2733bb70c7e2c35db1c1a2edb9d14a9d'),
  },
});
