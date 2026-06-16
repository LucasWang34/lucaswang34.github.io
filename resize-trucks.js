const fs = require('fs');
const sharp = require('sharp');

const sourceDir = 'C:\\Users\\matebook14\\Desktop\\货车';
const destDir = 'C:\\Users\\matebook14\\Desktop\\business\\images\\trucks';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('读取目录失败:', err);
        return;
    }

    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    
    imageFiles.forEach(file => {
        const sourcePath = `${sourceDir}\\${file}`;
        const destPath = `${destDir}\\${file}`;
        
        sharp(sourcePath)
            .resize(500, 500, {
                fit: sharp.fit.cover,
                position: sharp.strategy.entropy
            })
            .toFile(destPath)
            .then(() => {
                console.log(`已处理: ${file}`);
            })
            .catch(err => {
                console.error(`处理失败 ${file}:`, err);
            });
    });
});