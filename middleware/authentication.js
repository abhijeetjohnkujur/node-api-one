// authentication.js
const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key']; // Expecting the API key in the headers
  
    if (!apiKey || apiKey !== process.env.API_KEY) {
      // Check if the API key is provided and matches the environment variable
      console.log("Unauthorized access attempt: ", req.path);
      return res.status(401).send("Unauthorized access. Invalid or missing API key.");
    }
  
    next(); // Proceed to the next middleware or route
  };
  
  module.exports = authenticate;
  