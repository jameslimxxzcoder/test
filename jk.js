const axios = require('axios')

async function mn() {
  const res = await axios.get('https://facebook.com')
  console.log(res.data)
};
mn()