const playdl = require("play-dl");

module.exports.searchVideos = async (req, res) => {
    const query = req.query.q;

    try {
        const results = await playdl.search(query, { limit: 1 });
        const videoLinks = results.map(video => ({
            title: video.title,
            url: video.url
        }));
        res.json(videoLinks[0]);
    } catch (error) {
        console.error("Error searching YouTube:", error);
        res.status(500).json({ error: "Failed to search YouTube" });
    }
};
