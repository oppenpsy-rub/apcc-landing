#!/usr/bin/env python3
from PIL import Image

# Open original logo
img = Image.open('public/porta_logo.png')

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Get pixel data
data = img.getdata()

# Create new image with transparency
new_data = []
for pixel in data:
    # If pixel is close to white (R>240, G>240, B>240), make it transparent
    if pixel[0] > 240 and pixel[1] > 240 and pixel[2] > 240:
        new_data.append((255, 255, 255, 0))  # Fully transparent
    else:
        new_data.append(pixel)

# Update image data
img.putdata(new_data)

# Save with transparency
img.save('public/porta_logo.png', 'PNG')

print("✅ Logo with transparent background saved")
print(f"Mode: {img.mode}, Size: {img.size}")
