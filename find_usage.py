import os
import re

pngs = [
    'organ_genesis.png',
    'circular_biomanufacturing.png',
    'biotech_patent.png',
    'frontier_discovery.png',
    'astrobiology.png',
    'biotech_growth.png',
    'nano_surgery.png'
]

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for png in pngs:
    for html in html_files:
        with open(html, 'r', encoding='utf-8') as f:
            content = f.read()
            if png in content:
                print(f"{png} found in {html}")
