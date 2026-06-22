import os
import glob

app_dir = "/home/anilchoudhary/Fedora/GitHub/vwebit/app"

files = glob.glob(f"{app_dir}/**/*.tsx", recursive=True)

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content.replace("max-w-lg mx-auto", "max-w-[512px] mx-auto")
    new_content = new_content.replace("max-w-xl mx-auto", "max-w-[576px] mx-auto")
    
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Fixed {filepath}")
