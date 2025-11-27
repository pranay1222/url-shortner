const express = require("express");
const router = express.Router();
const Url = require("../model/url"); // Check if folder is 'models' or 'model'
const { nanoid } = require("nanoid");
const validUrl = require('valid-url');

router.post("/shorten", async (req, res) => {
    // BUG FIX 1: Frontend sends 'longUrl' (CamelCase), not 'longurl'
    let { longUrl } = req.body; 
    
    const base_url = process.env.BASE_URL;

    // Check base url
    if (!validUrl.isUri(base_url)) {
        return res.status(401).json("Invalid base url!");
    }

    // Check long url
    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });

            if (url) {
                res.json(url);
            } else {
                const urlCode = nanoid(6);
                const shortUrl = base_url + '/' + urlCode;

                url = new Url({
                    urlCode,
                    longUrl,
                    shortUrl,
                    date: new Date() // BUG FIX 2: Was 'new Data()' (Typo)
                });

                await url.save(); // BUG FIX 3: Was 'Url.save()' (Must be lowercase 'url')
                res.json(url);
            }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json("Invalid long url!");
    }
});

module.exports = router;