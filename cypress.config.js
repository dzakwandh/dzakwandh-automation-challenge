const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3roamj',
  e2e: {
    setupNodeEvents(on, config) {
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 8); // contoh: 'k3a9zq'
      const randomName = `User${timestamp}`;
      const randomUsername = `user_${randomStr}`;
      const randomEmail = `${randomUsername}@harakirimail.com`;

      config.env.randomName = randomName;
      config.env.randomUsername = randomUsername;
      config.env.randomEmail = randomEmail;
      config.env.randomWhatsapp = '08123456789';
      config.env.password = 'Tes12345';

      console.log(config.env);
      return config;
    },
  },
});
