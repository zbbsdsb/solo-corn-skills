@echo off
echo ========================================
echo  SOLO CORN SKILLS CLI - Quick Demo
echo ========================================
echo.
echo Welcome to SOLO CORN SKILLS CLI!
echo.
echo First, let's check if you have Node.js installed...
echo.
node --version
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
npm --version
echo.
echo Great! Now let's set up the CLI...
echo.
echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.
echo Building the CLI...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.
echo.
echo ========================================
echo  SUCCESS! CLI is ready to use!
echo ========================================
echo.
echo Now you can try these commands:
echo.
echo   scs --help
echo   scs models list
echo   scs models show first-principles
echo   scs models search "decision"
echo.
echo To use 'scs' globally, run: npm link
echo.
echo Check QUICKSTART.md for more info!
echo.
pause