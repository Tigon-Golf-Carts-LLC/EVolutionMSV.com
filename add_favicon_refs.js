/* Add favicon references to all HTML files */
const fs = require('fs');
const path = require('path');

// Define the favicon HTML to insert
const faviconHTML = `
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="shortcut icon" href="/favicon/favicon.ico">
`;

// Get all HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));

// Add favicon references to each HTML file
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the file already has favicon references
    if (!content.includes('rel="icon"')) {
        // Insert favicon HTML before the closing head tag
        content = content.replace('</head>', `${faviconHTML}\n</head>`);
        fs.writeFileSync(file, content);
        console.log(`Added favicon references to ${file}`);
    } else {
        console.log(`${file} already has favicon references`);
    }
});

console.log('Favicon references added to all HTML files');
