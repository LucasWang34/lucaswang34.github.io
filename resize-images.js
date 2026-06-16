const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 源目录和目标目录
const sourceDir = 'C:\\Users\\matebook14\\Desktop\\货车';
const destDir = 'C:\\Users\\matebook14\\Desktop\\货车_300x300';

// 确保目标目录存在
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// 调整后的尺寸（正方形）
const targetSize = 300;

// 读取源目录中的所有jpg文件
fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));
    
    jpgFiles.forEach((file, index) => {
        const sourcePath = path.join(sourceDir, file);
        const destPath = path.join(destDir, file);

        // 使用sharp调整图片大小（保持比例，裁剪成正方形）
        sharp(sourcePath)
            .resize(targetSize, targetSize, {
                fit: sharp.fit.cover,
                position: sharp.strategy.entropy
            })
            .toFile(destPath)
            .then(() => {
                console.log(`已调整 ${index + 1}/${jpgFiles.length}: ${file}`);
            })
            .catch(err => {
                console.error(`处理 ${file} 失败:`, err);
            });
    });
});