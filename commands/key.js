const inquirer = require('inquirer');
const colors = require('colors');
const KeyManger = require('../lib/KeyManager');
const { isRequired } = require('../utils/validation');
const key = {
  async set() {
    const keyManager = new KeyManger();
    const input = await inquirer.prompt([
      {
        type: 'input',
        name: 'key',
        message: 'Enter API Key'.green + '>>',
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log('API Key Set'.blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManger();
      const key = keyManager.getkey();
      console.log('Current API Key:', key.yellow);
      return key;
    } catch (error) {
      console.log(error.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManger();
      keyManager.deletekey();
      console.log('Key is removed'.green);
      return key;
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

module.exports = key;
