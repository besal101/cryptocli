# cryptocli

Command line interface written in Node.js to check cryptocurrency prices at your preference currency in CSV Format.

Register an API key at https://nomics.com

# Instalation

```
Download or fork the repository

Get inside the directory and type:

npm install

npm link
```

# API KEY

Register an API key at https://nomics.com. It is free and easy accessible

# Usage

```
# Help & Commands
cryptocli -h

# Version
cryptocli -V

# API Key Commands
cryptocli key set
cryptocli key show
cryptocli key remove

# Crypto Check Commands
cryptocli check price

# Check Specific Coins (default: BTN,ETH,XRP)
cryptocli check --coin=BTC,ETH

# Choose Currency (Default: USD)
cryptocli check --cur=EUR
```

### Example

```
 1. After successfully installation you can run this program from any location.
 2. Just open your cmd and type following command.
    cryptocli key set
     [TYPE YOUR KEYS HERE AND HIT ENTER]
 3. To check price of Bitcoin in EURO type following command
    cryptocli check price --coin=BTC --cur=EUR
    [YOU WILL GET RESUTLS LIKE THIS]
    Coin:BTC(Bitcoin) | Price: €54,448.23 | Rank: 1
```

### License

MIT
