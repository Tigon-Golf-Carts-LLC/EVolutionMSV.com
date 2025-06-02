#!/usr/bin/env python3
import xml.etree.ElementTree as ET
import datetime

# Parse the sitemap XML
tree = ET.parse('/home/ubuntu/ptv_conversion/MSVDealer.com-main/sitemap.xml')
root = tree.getroot()

# Define namespace
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')

# Get current date
today = datetime.date.today().strftime("%Y-%m-%d")

# Update all URLs and lastmod dates
for url in root.findall('.//sm:url', ns):
    loc = url.find('sm:loc', ns)
    if loc is not None:
        # Replace domain
        old_url = loc.text
        new_url = old_url.replace('msvdealer.com', 'ptvdealer.com')
        loc.text = new_url
        
    # Update lastmod date
    lastmod = url.find('sm:lastmod', ns)
    if lastmod is not None:
        lastmod.text = today

# Write the updated XML back to the file
tree.write('/home/ubuntu/ptv_conversion/MSVDealer.com-main/sitemap.xml', 
           encoding='UTF-8', 
           xml_declaration=True)

print("Sitemap updated successfully with new domain and current date.")
