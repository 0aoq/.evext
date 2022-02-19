Clear-Host # Clear the console
Write-Output -----------------------------------------------------------------------------------------------------------------------
Write-Output '[?] Compiling' 
tsc # Compile the typescript files
Write-Output '[?] Obfuscating'
# terser package/dist/evext.js -o test/evext.js # Obfuscate the javascript file using terser
Write-Output '[?] Building'
pkg package/dist/evext.js --out-path package/build --compress GZip --debug # Build the package using vercel/pkg
Write-Output '[!] Done'
Write-Output -----------------------------------------------------------------------------------------------------------------------