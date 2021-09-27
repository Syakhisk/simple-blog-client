// https://source.unsplash.com/random/800x600

const axios = require("axios");

(async () => {
  const res = await axios.get("https://source.unsplash.com/random/800x600");
  console.log(res.request.res.responseUrl);
})();
