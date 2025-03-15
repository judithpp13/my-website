async function fetchMetadataFormats() {
    try {
        const response = await fetch('/pubmed/metadata-formats');
        const data = await response.json();

        // Extract and display metadata formats
        const formats = data['OAI-PMH'].ListMetadataFormats[0].metadataFormat;
        const metadataDiv = document.getElementById('metadata');

        formats.forEach(format => {
            const formatElement = document.createElement('div');
            formatElement.style.marginBottom = '20px';
            formatElement.innerHTML = `
                <h2>${format.metadataPrefix[0]}</h2>
                <p><strong>Schema:</strong> <a href="${format.schema[0]}" target="_blank">${format.schema[0]}</a></p>
                <p><strong>Namespace:</strong> ${format.metadataNamespace[0]}</p>
            `;
            metadataDiv.appendChild(formatElement);
        });
    } catch (error) {
        console.error('Error fetching metadata formats:', error);
        document.getElementById('metadata').innerText = 'Error loading data.';
    }
}

// Fetch metadata formats when the page loads
fetchMetadataFormats();