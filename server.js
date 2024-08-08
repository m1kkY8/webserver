const express = require("express");
const playdl = require("play-dl")

const app = express();
const port = 3001;

app.get("/search", async (req, res) => {
    const query = req.query.q

    if(!query){
        res.status(400).json({error: "No query"});
    }

    try {
        const results = await playdl.search(query, {limit: 1});
        
        const videoLinks = results.map(video => ({
            title: video.title,
            url: video.url
        }));
        
        console.log(videoLinks[0])
        res.json(videoLinks[0]);

    }

    catch (error){
        console.log(error);
    }
});

app.listen(port, ()=> {
    console.log(`Server running on localhost:${port}`);
});
