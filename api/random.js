const fs = require("fs");
const path = require("path");
const axios = require("axios");



exports.config = {
  name: "rwords",
  author: "Your_Name",
  description: "Fetch a random words",
  method: "post",
  category: "utility",
  link: ["/random"]
};

exports.initialize = async function ({ req, res }) {
  try {
    const data = getShotiData();

    if (data.length === 0) {
      return res.json({ message: "No URLs available", status: 404 });
    }

    
    const response = await axios.get(`https://random-hugot-api.onrender.com/random`);
    const random = response.data.random;

    

    console.log(`responce ok yeyyy: ${random} `);


   

    writer.on("finish", () => {
      res.json({  
        details: {
          random,
          
        },
        videoPath, // Path to the saved video
        status: 200
      });
    });

    writer.on("error", (err) => {
      console.error("Error saving video:", err.message);
      res.json({ message: "Error downloading the video", status: 500 });
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.json({ message: "Error fetching video data", status: 500 });
  }
};
