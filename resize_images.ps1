Add-Type -AssemblyName System.Drawing

$truckFolder = $([char]0x8CB8)$([char]0x8ECA)
$sourceDir = "C:\Users\matebook14\Desktop\$truckFolder"
$destDir = "C:\Users\matebook14\Desktop\business\images\trucks"
$targetSize = 500

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

$imageFiles = Get-ChildItem -Path $sourceDir -Filter "*.jpg"

if (-not $imageFiles) {
    Write-Host "No image files found"
    exit 1
}

Write-Host "Found $($imageFiles.Count) images, processing..."

foreach ($file in $imageFiles) {
    $sourcePath = $file.FullName
    $destPath = Join-Path $destDir $file.Name
    
    try {
        $img = [System.Drawing.Image]::FromFile($sourcePath)
        $width = $img.Width
        $height = $img.Height
        
        $minDim = [Math]::Min($width, $height)
        $left = ($width - $minDim) / 2
        $top = ($height - $minDim) / 2
        
        $cropRect = New-Object System.Drawing.Rectangle($left, $top, $minDim, $minDim)
        $croppedBmp = New-Object System.Drawing.Bitmap($minDim, $minDim)
        $graphics = [System.Drawing.Graphics]::FromImage($croppedBmp)
        $graphics.DrawImage($img, 0, 0, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
        
        $resizedBmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
        $graphics = [System.Drawing.Graphics]::FromImage($resizedBmp)
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($croppedBmp, 0, 0, $targetSize, $targetSize)
        
        $resizedBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        
        $img.Dispose()
        $croppedBmp.Dispose()
        $resizedBmp.Dispose()
        $graphics.Dispose()
        
        Write-Host "Processed: $($file.Name)"
    }
    catch {
        Write-Host "Failed to process $($file.Name): $_"
    }
}

Write-Host ""
Write-Host "All images processed successfully!"
