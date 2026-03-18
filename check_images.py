import re
import os

def check_images(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find img src
    images = re.findall(r'src=["\']([^"\']+)["\']', content)
    print(f"--- Checking {file_path} ---")
    for img in set(images):
        if not img.startswith('http'):
            # Basic path handling (assuming same dir)
            path = os.path.join(os.path.dirname(file_path), img)
            if os.path.exists(path):
                size_kb = os.path.getsize(path) / 1024
                print(f"{img}: {size_kb:.2f}KB")
            else:
                print(f"{img}: NOT FOUND")

check_images('c:/Users/Admin/Documents/Bio Tech 2/index.html')
check_images('c:/Users/Admin/Documents/Bio Tech 2/research.html')
