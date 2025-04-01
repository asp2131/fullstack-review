const axios = require('axios').default;

const testData = require('../../data.json');

//MLP API: https://ponyapi.net/


const getPoniesByName = async (ponyName) => {
  // TODO: Use the axios module to get repos for a specific user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  const ponyResponse = await axios.get(`http://ponyapi.net/v1/character/${ponyName}`);

  
  

  
  return ponyResponse.data || testData;
};

module.exports.getPoniesByName
 = getPoniesByName
;
