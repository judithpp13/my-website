// Fetch data from the Express server and display it in a table
async function fetchPubMedRecords() {
    try {
        const response = await fetch('/pubmed/records');
        const data = await response.json();

        // Extract records based on the observed structure
        const records = data['OAI-PMH']?.ListRecords?.[0]?.record;
        const tableHead = document.getElementById('tableHeader');
        const tableBody = document.getElementById('tableBody');

        if (!records || records.length === 0) {
            const noDataRow = document.createElement('tr');
            noDataRow.innerHTML = `<td colspan="4">No records found.</td>`;
            tableBody.appendChild(noDataRow);
            return;
        }

        // Use the first record to get column names (keys)
        const firstRecordMetadata = records[0]?.metadata?.[0]?.article[0];
        const columns = Object.keys(firstRecordMetadata);

        // Create table headers dynamically based on metadata fields
        columns.forEach(column => {
            const headerCell = document.createElement('th');
            headerCell.textContent = column;
            tableHead.appendChild(headerCell);
        });

        // Populate the table rows dynamically
        records.forEach(record => {
            const metadata = record.metadata?.[0]?.article[0];
            console.log(metadata); // Add this to inspect the structure of each record
            const row = document.createElement('tr');

            columns.forEach(column => {
                const cell = document.createElement('td');
                
                // Handle nested objects or arrays
                let value = metadata?.[column];
                if (Array.isArray(value)) {
                    // If it's an array, join items with commas
                    value = value.map(item => (typeof item === 'object' ? JSON.stringify(item) : item)).join(', ');
                } else if (typeof value === 'object') {
                    // If it's an object, convert to JSON or access specific properties
                    value = JSON.stringify(value, null, 2);
                }

                cell.textContent = value || 'N/A';
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching PubMed records:', error);
        const tableBody = document.getElementById('tableBody');
        const errorRow = document.createElement('tr');
        errorRow.innerHTML = `<td colspan="4">Error loading data.</td>`;
        tableBody.appendChild(errorRow);
    }
}

// Fetch records when the page loads
fetchPubMedRecords();