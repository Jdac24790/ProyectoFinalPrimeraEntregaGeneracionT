from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
import os
import uvicorn

app = FastAPI(title="Nube AI - Dummy", version="1.0.0")

if os.path.isdir("static"):
    app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def index():
    return FileResponse("index.html")

@app.get("/health")
async def health():
    return JSONResponse({"status": "ok"})

@app.get("/config")
async def config():
    return JSONResponse({"mode": "dummy"})

@app.get("/manifest.json")
async def manifest():
    return FileResponse("manifest.json")

@app.get("/AVC.png")
async def icon_root():
    return FileResponse("AVC.png")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)