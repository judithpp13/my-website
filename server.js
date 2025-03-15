const express = require('express');
const axios = require('axios');
const xml2js = require('xml2js');
const path = require('path'); // Import path for correct file resolution
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route to get metadata formats from PubMed API
// app.get('/pubmed/metadata-formats', async (req, res) => {
    app.get('/pubmed/records', async (req, res) => {
    // const url = 'https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=ListMetadataFormats';
    const url = 'https://www.ncbi.nlm.nih.gov/pmc/oai/oai.cgi?verb=ListRecords&metadataPrefix=pmc';
    try {
        const response = await axios.get(url);
        const xmlData = response.data;

        // Parse XML to JSON for easier handling
        xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                return res.status(500).send('Error parsing XML');
            }
            res.json(result); // Send JSON data to client
        });
    } catch (error) {
        res.status(500).send('Error calling PubMed API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});