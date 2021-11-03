const Configstore = require('configstore');
const pkg = require('../package.json');
class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }
  setKey(key) {
    this.conf.set('apiKey', key);
    return key;
  }
  getkey() {
    const key = this.conf.get('apiKey');
    if (!key) {
      throw new Error('No API Key Found - Get your key at https://nomics.com');
    }
    return key;
  }
  deletekey() {
    const key = this.conf.get('apiKey');
    if (!key) {
      throw new Error(
        'No API Key Found - You need to have key first to remove it'
      );
    }
    this.conf.delete('apiKey');
    return;
  }
}

module.exports = KeyManager;
