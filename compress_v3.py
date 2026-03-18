from PIL import Image
import os

def convert_to_webp(input_path, output_path, target_size_kb=95):
    img = Image.open(input_path)
    # Ensure it's a nice aspect ratio for the cards
    img.thumbnail((1000, 1000), Image.LANCZOS)
    
    quality = 90
    while quality > 10:
        img.save(output_path, 'WEBP', quality=quality)
        size_kb = os.path.getsize(output_path) / 1024
        if size_kb <= target_size_kb:
            print(f"Compressed {output_path} to {size_kb:.2f}KB")
            break
        quality -= 5

images = [
    (r'C:\Users\Admin\.gemini\antigravity\brain\a304099c-bca5-4ffd-93d5-c1dde19c4c84\marcus_webb_action_portrait_1773759361576.png', r'c:\Users\Admin\Documents\Bio Tech 2\marcus_webb_v3.webp'),
    (r'C:\Users\Admin\.gemini\antigravity\brain\a304099c-bca5-4ffd-93d5-c1dde19c4c84\priya_sharma_action_portrait_1773759392688.png', r'c:\Users\Admin\Documents\Bio Tech 2\priya_sharma_v3.webp'),
    (r'C:\Users\Admin\.gemini\antigravity\brain\a304099c-bca5-4ffd-93d5-c1dde19c4c84\david_chen_action_portrait_1773759425511.png', r'c:\Users\Admin\Documents\Bio Tech 2\david_chen_v3.webp')
]

for src, dst in images:
    if os.path.exists(src):
        convert_to_webp(src, dst)
