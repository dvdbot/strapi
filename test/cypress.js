const cypress = require('cypress');

const cypressTest = () => {
  const config = Object.assign(
    { spec: './packages/**/test/front/integration/*' },
    process.env.npm_config_browser === 'true' ? { browser: 'chrome' } : {}
  );

  return cypress.run(config);
};

cypressTest();
