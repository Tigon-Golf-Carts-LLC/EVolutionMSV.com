from PIL import Image
import os

# Create favicon directory if it doesn't exist
favicon_dir = "favicon"
os.makedirs(favicon_dir, exist_ok=True)

# Open the source image
source_image = Image.open("/home/ubuntu/upload/PTV DEALER.jpg")

# Create favicon.ico (32x32)
favicon = source_image.resize((32, 32))
favicon.save(os.path.join(favicon_dir, "favicon.ico"))

# Create favicon-16x16.png
favicon16 = source_image.resize((16, 16))
favicon16.save(os.path.join(favicon_dir, "favicon-16x16.png"))

# Create favicon-32x32.png
favicon32 = source_image.resize((32, 32))
favicon32.save(os.path.join(favicon_dir, "favicon-32x32.png"))

# Create apple-touch-icon.png (180x180)
apple_icon = source_image.resize((180, 180))
apple_icon.save(os.path.join(favicon_dir, "apple-touch-icon.png"))

# Create android-chrome-192x192.png
android_icon = source_image.resize((192, 192))
android_icon.save(os.path.join(favicon_dir, "android-chrome-192x192.png"))

print("All favicon files created successfully in the 'favicon' directory.")
