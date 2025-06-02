// Create purchasing and search intent content for all HTML pages
const fs = require('fs');
const path = require('path');

// Define the purchasing and search intent content to add
const purchasingContent = `
<section id="buying-guide">
    <h2>PTV Buying Guide: Finding Your Perfect Personal Transportation Vehicle</h2>
    <p>When shopping for a Personal Transportation Vehicle (PTV), it's important to consider your specific needs and usage patterns. PTVs offer an eco-friendly, cost-effective transportation solution for short-distance travel, with various models available to suit different lifestyles and requirements. Our authorized PTV dealers can help you navigate options including battery capacity, seating configuration, storage space, and additional features to ensure you find the perfect match for your transportation needs.</p>
    
    <h3>PTV Financing and Ownership Benefits</h3>
    <p>Investing in a Personal Transportation Vehicle comes with numerous financial advantages. Many of our PTV dealers offer flexible financing options, warranty packages, and maintenance plans to make ownership hassle-free. PTVs typically have lower insurance costs, minimal maintenance requirements, and zero fuel expenses compared to traditional vehicles. Additionally, some locations offer tax incentives for eco-friendly transportation solutions, making a PTV purchase even more economical in the long run.</p>
</section>

<section id="ptv-advantages">
    <h2>Why Choose a Personal Transportation Vehicle?</h2>
    <p>Personal Transportation Vehicles represent the future of short-distance mobility. With rising fuel costs and growing environmental concerns, PTVs offer a practical alternative that reduces your carbon footprint while providing convenient transportation. These vehicles are perfect for planned communities, campuses, small towns, and neighborhoods, allowing easy access to local amenities without the hassle of traditional vehicles.</p>
    
    <h3>PTV Models and Customization Options</h3>
    <p>Today's Personal Transportation Vehicles come in a variety of models with extensive customization options. From basic transportation models to luxury versions with premium features, there's a PTV to match every preference and budget. Many models offer customizable seating, storage solutions, weather protection packages, and technology integrations. Visit your local PTV dealer to explore the full range of available options and find the configuration that best suits your lifestyle needs.</p>
</section>`;

// Get all HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));

// Add content to each HTML file
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if the file already has the new content
    if (!content.includes('PTV Buying Guide')) {
        // Find the position to insert the new content (before the footer)
        const footerPos = content.indexOf('<footer>');
        if (footerPos !== -1) {
            // Insert the new content before the footer
            const newContent = content.slice(0, footerPos) + purchasingContent + '\n\n' + content.slice(footerPos);
            fs.writeFileSync(file, newContent);
            console.log(`Added purchasing and search intent content to ${file}`);
        } else {
            console.log(`Could not find footer in ${file}`);
        }
    } else {
        console.log(`${file} already has the purchasing content`);
    }
});

console.log('Purchasing and search intent content added to all HTML files');
