import os
import sys
from PIL import Image

# 源目录和目标目录
source_dir = r'C:\Users\matebook14\Desktop\货车'
dest_dir = r'C:\Users\matebook14\Desktop\business\images\trucks'

# 目标尺寸（正方形）
target_size = 500

# 确保目标目录存在
os.makedirs(dest_dir, exist_ok=True)

# 获取源目录中的所有图片文件
image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp')
image_files = [f for f in os.listdir(source_dir) if f.lower().endswith(image_extensions)]

if not image_files:
    print("未找到图片文件")
    sys.exit(1)

print(f"找到 {len(image_files)} 张图片，正在处理...")

for index, filename in enumerate(image_files):
    source_path = os.path.join(source_dir, filename)
    dest_path = os.path.join(dest_dir, filename)
    
    try:
        # 打开图片
        with Image.open(source_path) as img:
            # 获取图片尺寸
            width, height = img.size
            
            # 计算裁剪区域（从中心裁剪）
            min_dim = min(width, height)
            left = (width - min_dim) // 2
            top = (height - min_dim) // 2
            right = left + min_dim
            bottom = top + min_dim
            
            # 裁剪成正方形
            img_cropped = img.crop((left, top, right, bottom))
            
            # 调整尺寸到目标大小
            img_resized = img_cropped.resize((target_size, target_size), Image.Resampling.LANCZOS)
            
            # 保存图片
            img_resized.save(dest_path, 'JPEG', quality=85)
            
            print(f"已处理 {index + 1}/{len(image_files)}: {filename}")
    
    except Exception as e:
        print(f"处理 {filename} 失败: {str(e)}")

print("\n所有图片处理完成！")
