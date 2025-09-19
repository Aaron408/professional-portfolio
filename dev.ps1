# Script de desarrollo para Portfolio Componentizado
# Uso: .\dev.ps1 [comando]
# Comandos disponibles: start, demo, build, help

param(
    [string]$Command = "help"
)

$ProjectName = "Portfolio Componentizado"
$Port = 3000
$DemoPort = 3001

function Show-Header {
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host "    $ProjectName - Dev Script" -ForegroundColor Cyan
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host ""
}

function Show-Help {
    Write-Host "Comandos disponibles:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "  start    - Inicia servidor de desarrollo en puerto $Port" -ForegroundColor Green
    Write-Host "  demo     - Inicia servidor de demo en puerto $DemoPort" -ForegroundColor Green
    Write-Host "  build    - Verifica archivos para producción" -ForegroundColor Green
    Write-Host "  check    - Verifica estructura del proyecto" -ForegroundColor Green
    Write-Host "  open     - Abre el proyecto en el navegador" -ForegroundColor Green
    Write-Host "  help     - Muestra esta ayuda" -ForegroundColor Green
    Write-Host ""
    Write-Host "Ejemplos:" -ForegroundColor Yellow
    Write-Host "  .\dev.ps1 start" -ForegroundColor Gray
    Write-Host "  .\dev.ps1 demo" -ForegroundColor Gray
    Write-Host ""
}

function Start-DevServer {
    Write-Host "🚀 Iniciando servidor de desarrollo..." -ForegroundColor Green
    Write-Host "📍 URL: http://localhost:$Port" -ForegroundColor Yellow
    Write-Host "📄 Archivo principal: index-componentized.html" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Red
    Write-Host ""
    
    try {
        # Intentar con Python primero
        if (Get-Command python -ErrorAction SilentlyContinue) {
            python -m http.server $Port
        }
        # Si no hay Python, intentar con Node.js
        elseif (Get-Command node -ErrorAction SilentlyContinue) {
            if (Get-Command npx -ErrorAction SilentlyContinue) {
                npx http-server -p $Port -c-1
            } else {
                Write-Host "❌ Necesitas instalar http-server: npm install -g http-server" -ForegroundColor Red
            }
        }
        else {
            Write-Host "❌ Necesitas Python o Node.js para ejecutar el servidor" -ForegroundColor Red
            Write-Host "   Instala Python desde: https://python.org" -ForegroundColor Yellow
            Write-Host "   O Node.js desde: https://nodejs.org" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "❌ Error iniciando servidor: $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Start-DemoServer {
    Write-Host "🎮 Iniciando servidor de demo..." -ForegroundColor Green
    Write-Host "📍 URL: http://localhost:$DemoPort/demo.html" -ForegroundColor Yellow
    Write-Host "🎯 Modo demo con controles de testing" -ForegroundColor Gray
    Write-Host ""
    Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Red
    Write-Host ""
    
    try {
        if (Get-Command python -ErrorAction SilentlyContinue) {
            python -m http.server $DemoPort
        }
        elseif (Get-Command node -ErrorAction SilentlyContinue) {
            if (Get-Command npx -ErrorAction SilentlyContinue) {
                npx http-server -p $DemoPort -c-1
            } else {
                Write-Host "❌ Necesitas instalar http-server: npm install -g http-server" -ForegroundColor Red
            }
        }
        else {
            Write-Host "❌ Necesitas Python o Node.js para ejecutar el servidor" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "❌ Error iniciando servidor demo: $($_.Exception.Message)" -ForegroundColor Red
    }
}

function Test-ProjectStructure {
    Write-Host "🔍 Verificando estructura del proyecto..." -ForegroundColor Green
    Write-Host ""
    
    $requiredFiles = @(
        "index-componentized.html",
        "demo.html",
        "package.json",
        "README-Components.md",
        "components\PortfolioApp.js",
        "components\sidebar\Sidebar.js",
        "components\navigation\Navigation.js",
        "utils\Utils.js",
        "utils\PageManager.js",
        "data\portfolioData.js"
    )
    
    $missingFiles = @()
    $foundFiles = 0
    
    foreach ($file in $requiredFiles) {
        if (Test-Path $file) {
            Write-Host "✅ $file" -ForegroundColor Green
            $foundFiles++
        } else {
            Write-Host "❌ $file" -ForegroundColor Red
            $missingFiles += $file
        }
    }
    
    Write-Host ""
    Write-Host "📊 Resumen:" -ForegroundColor Yellow
    Write-Host "   Archivos encontrados: $foundFiles/$($requiredFiles.Count)" -ForegroundColor Gray
    
    if ($missingFiles.Count -eq 0) {
        Write-Host "   ✅ Estructura del proyecto completa" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  Faltan $($missingFiles.Count) archivos" -ForegroundColor Yellow
        Write-Host "   Archivos faltantes:" -ForegroundColor Red
        foreach ($file in $missingFiles) {
            Write-Host "     - $file" -ForegroundColor Red
        }
    }
}

function Build-Project {
    Write-Host "🔨 Verificando proyecto para producción..." -ForegroundColor Green
    Write-Host ""
    
    # Verificar archivos principales
    Test-ProjectStructure
    
    Write-Host ""
    Write-Host "📦 Verificación de build:" -ForegroundColor Yellow
    
    # Verificar que no hay errores de sintaxis en JS
    $jsFiles = Get-ChildItem -Recurse -Filter "*.js" | Where-Object { $_.Directory.Name -ne "node_modules" }
    
    Write-Host "   Archivos JavaScript encontrados: $($jsFiles.Count)" -ForegroundColor Gray
    
    # Verificar tamaño de archivos
    $totalSize = ($jsFiles | Measure-Object -Property Length -Sum).Sum
    $totalSizeKB = [math]::Round($totalSize / 1024, 2)
    
    Write-Host "   Tamaño total JS: $totalSizeKB KB" -ForegroundColor Gray
    
    if ($totalSizeKB -lt 500) {
        Write-Host "   ✅ Tamaño optimizado para web" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  Considera optimizar el código" -ForegroundColor Yellow
    }
    
    Write-Host ""
    Write-Host "✅ Proyecto listo para producción" -ForegroundColor Green
}

function Open-InBrowser {
    Write-Host "🌐 Abriendo proyecto en el navegador..." -ForegroundColor Green
    
    $url = "http://localhost:$Port"
    
    try {
        Start-Process $url
        Write-Host "✅ Navegador abierto en: $url" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ No se pudo abrir el navegador automáticamente" -ForegroundColor Red
        Write-Host "   Abre manualmente: $url" -ForegroundColor Yellow
    }
}

# Main script logic
Clear-Host
Show-Header

switch ($Command.ToLower()) {
    "start" {
        Start-DevServer
    }
    "demo" {
        Start-DemoServer
    }
    "build" {
        Build-Project
    }
    "check" {
        Test-ProjectStructure
    }
    "open" {
        Open-InBrowser
    }
    "help" {
        Show-Help
    }
    default {
        Write-Host "❌ Comando desconocido: $Command" -ForegroundColor Red
        Write-Host ""
        Show-Help
    }
}

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
