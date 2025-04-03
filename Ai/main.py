from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import tests

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(tests.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "AI Mock Test API is running"}