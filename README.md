# Link Library

A cloud-based application that allows users to manage and categorize their links with additional features like background music and a mini chatbot.

## Features

- User authentication and role-based access control
- Private link library for each user
- Automatic link classification (safe/unsafe)
- Background music feature
- Mini chatbot assistance
- Responsive design

## Setup Instructions

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   Create a `.env` file with:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   SECRET_KEY=your-secret-key
   ```

## Deployment

This application is configured for deployment on Render.com. Simply connect your GitHub repository to Render and it will automatically deploy the application.

## Technologies Used

- Backend: Flask (Python)
- Frontend: HTML, CSS, JavaScript
- Database: SQLite (development) / PostgreSQL (production)
- Authentication: Flask-Login
- Deployment: Render.com 