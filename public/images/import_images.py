import pandas as pd
import requests
import os

# Load Excel file
file_path = r"C:\Users\shesh\Downloads\TN Product Images\Trustnova_products_export_2.xlsx"   # <-- update with your Excel file path
df = pd.read_excel(file_path)

# Folder to save images
save_folder = r"C:\Users\shesh\Downloads\TN Product Images"
os.makedirs(save_folder, exist_ok=True)

# Column names in your Excel
id_column = "Product ID"   # <-- update if your header name is different
image_column = "Image Src" # <-- column with links

# Download and rename
for idx, row in df.iterrows():
    product_id = row[id_column]
    url = row[image_column]
    
    if pd.notna(url) and pd.notna(product_id):
        try:
            response = requests.get(url, stream=True)
            ext = url.split(".")[-1].split("?")[0]  # extract extension (jpg, png, etc.)
            filename = f"trustnova_product_{product_id}.{ext}"
            filepath = os.path.join(save_folder, filename)
            with open(filepath, "wb") as f:
                f.write(response.content)
            print(f"Downloaded: {filename}")
        except Exception as e:
            print(f"Failed: {url} | {e}")
