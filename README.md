
## 📁 DropSync

**DropSync** is a simple web-based document upload and management system built with **React (frontend)** and **Flask (backend)**. It allows users to upload files directly from their browser and stores them in a local `uploads` folder. Users can also view previously uploaded documents through a clean sidebar navigation interface.

### ✨ Features

* 📤 Upload documents via a sleek web interface
* 🧭 Toggleable sidebar with navigation options
* 🗂️ View previously uploaded documents
* 🔗 Direct links to view files served by the Flask backend
* 💡 User-friendly design with gradient background and responsive layout

### 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Flask (Python)
* **Styling:** CSS
* **Cross-Origin Requests:** Handled via Flask-CORS

### 📦 How to Run

#### 🔧 Backend (Flask)

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```
2. Install dependencies:

   ```bash
   pip install flask flask-cors
   ```
3. Start the server:

   ```bash
   python app.py
   ```

#### 🖼️ Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the development server:

   ```bash
   npm start
   ```

### 📂 File Upload Path

Uploaded files are saved to:

```
DropSync/uploads/
```

You can view them in your browser via:

```
http://localhost:5000/uploads/<filename>
```

