from PIL import Image
import os

def convert_to_webp(input_path, output_path, target_size_kb=95):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} not found")
        return
    img = Image.open(input_path)
    # Resize to max 1200px width/height for research page
    img.thumbnail((1200, 1200), Image.LANCZOS)
    
    quality = 90
    while quality > 10:
        img.save(output_path, 'WEBP', quality=quality)
        size_kb = os.path.getsize(output_path) / 1024
        if size_kb <= target_size_kb:
            print(f"Compressed {output_path} to {size_kb:.2f}KB")
            break
        quality -= 5

images_to_convert = [
    ('organ_genesis.png', 'organ_genesis.webp'),
    ('circular_biomanufacturing.png', 'circular_biomanufacturing.webp'),
    ('biotech_patent.png', 'biotech_patent.webp'),
    ('frontier_discovery.png', 'frontier_discovery_optimized.webp'),
    ('astrobiology.png', 'astrobiology.webp'),
    ('biotech_growth.png', 'biotech_growth.webp'),
    ('nano_surgery.png', 'nano_surgery.webp')
]

for src, dst in images_to_convert:
    convert_to_webp(src, dst)
