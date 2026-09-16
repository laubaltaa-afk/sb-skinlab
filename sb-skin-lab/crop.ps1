Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\elsam\.gemini\antigravity\scratch\sb-skin-lab\assets\banner.png"
$src = [System.Drawing.Bitmap]::FromFile($inputPath)

# Logo bounding box: X=430..516, Y=16..104
# Add horizontal padding 12px, top padding 6px, bottom padding 4px
$padX = 14
$padYTop = 6
$padYBottom = 3

$cropX = 430 - $padX
$cropY = 16 - $padYTop
$cropW = (516 - 430) + ($padX * 2)
$cropH = (104 - 16) + $padYTop + $padYBottom

$logoRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $src.Clone($logoRect, $src.PixelFormat)

# Make pure transparent where pixels are white/off-white (R > 230, G > 230, B > 230)
$transLogo = New-Object System.Drawing.Bitmap($cropW, $cropH)
for ($x = 0; $x -lt $cropW; $x++) {
    for ($y = 0; $y -lt $cropH; $y++) {
        $px = $cropped.GetPixel($x, $y)
        if ($px.R -gt 225 -and $px.G -gt 225 -and $px.B -gt 225) {
            $transLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
        } else {
            $transLogo.SetPixel($x, $y, $px)
        }
    }
}

$logoPath = "C:\Users\elsam\.gemini\antigravity\scratch\sb-skin-lab\assets\logo.png"
$transLogo.Save($logoPath, [System.Drawing.Imaging.ImageFormat]::Png)

$cropped.Dispose()
$transLogo.Dispose()
$src.Dispose()
Write-Output "Clean transparent logo created!"
