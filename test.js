const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js'); // Library to convert XML to JSON
const app = express();
const port = 3000;

// Serve static files, such as HTML, from the current directory
app.use(express.static(__dirname));

// Route to call PubMed API and return JSON data
app.get('/pubmed/metadata-formats', async (req, res) => {
    const url = 'https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=ListMetadataFormats';
    try {
        const response = await axios.get(url);
        const xmlData = response.data;

        // Parse XML to JSON for easy handling in JavaScript
        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                return res.status(500).send('Error parsing XML');
            }
            res.json(result); // Send JSON response to client
        });
    } catch (error) {
        res.status(500).send('Error calling PubMed API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});