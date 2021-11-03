const keyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');
const colors = require('colors');
const check = {
  async price(cmd) {
    try {
      const keymanager = new keyManager();
      const key = keymanager.getkey();

      const api = new CryptoAPI(key);
      const priceOutput = await api.getPriceData(cmd.coin, cmd.cur);
      console.log(priceOutput.green);
    } catch (err) {
      console.log(err.message.red);
    }
  },
};

module.exports = check;
