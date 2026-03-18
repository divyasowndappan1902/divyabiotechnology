from PIL import Image
import os

def convert_to_webp(input_path, output_path, target_size_kb=95):
    img = Image.open(input_path)
    img.thumbnail((1200, 800), Image.LANCZOS)
    
    quality = 90
    while quality > 10:
        img.save(output_path, 'WEBP', quality=quality)
        size_kb = os.path.getsize(output_path) / 1024
        if size_kb <= target_size_kb:
            print(f"Compressed {output_path} to {size_kb:.2f}KB")
            break
        quality -= 5

input_img = r'c:\Users\Admin\Documents\Bio Tech 2\advanced_patient_diagnostics_1773681387868.png'
output_img = r'c:\Users\Admin\Documents\Bio Tech 2\precision_health_sector.webp'

if os.path.exists(input_img):
    convert_to_webp(input_img, output_img)
else:
    print(f"Error: {input_img} not found")
