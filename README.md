# 🐒 CMD App

## 📜 Description

🐒 CMD App is a 🎮 CLI-based application for 🎫 ticket management using 🐳 MongoDB. This project shows basic CRUD 🛠️ (Create, Read, Update, Delete) in a 🖥️ command-line interface, with an Express 🚀 server.

## 🌟 Features

- ➕ Add, 🔄 update, ❌ delete, and 👀 view 🎫 tickets via a CLI.
- Uses 🐳 MongoDB for 📦 storage.
- Includes an Express 🚀 server for future 📈 scalability.
- Auto-generates 🎫 initial tickets if none exist.

## ⚙️ Prerequisites

- 🖥️ Node.js (v16+ recommended)
- 🐳 MongoDB installed & running locally or remotely 🌐

## 🛠️ Installation

1. 🌀 Clone this repo:
   ```bash
   git clone https://github.com/Akiva22Cohen/mongo-cmd-app.git
   ```
2. 📂 Go to the project folder:
   ```bash
   cd mongo-cmd-app
   ```
3. 📥 Install dependencies:
   ```bash
   npm install
   ```

## 🚀 Usage

### 🐳 Run MongoDB Locally

Ensure 🐳 MongoDB is running on `localhost:27017`. Adjust 🔗 connection string in `.env` if needed.

### ▶️ Start App

1. Start the app:
   ```bash
   npm start
   ```
2. The CLI 🌐 interface launches for 🎫 ticket management.

### 📜 Commands

- ➕ **Add Ticket**: Add a new 🎫 ticket.
- 🔄 **Update Ticket**: Edit existing 🎫 ticket.
- ❌ **Delete Ticket**: Remove 🎫 ticket.
- 👀 **View Tickets**: Show all 🎫 tickets in 📊 table.

### 🤖 Example Interaction

```plaintext
=== 🎫 Ticket Management ===
┌─────────┬──────────┬────────────┬────────────────────┬────────┬───────────────┐
│ (index) │   name   │  subject   │    description     │ isOpen │ waitingHours  │
├─────────┼──────────┼────────────┼────────────────────┼────────┼───────────────┤
│    1    │ Ticket 1 │  Issue A   │     Details A      │  true  │       3       │
└─────────┴──────────┴────────────┴────────────────────┴────────┴───────────────┘
1. ➕ Add Ticket
2. 🔄 Update Ticket
3. ❌ Delete Ticket
4. 🚪 Exit
Choose an option:
```

## 🗂️ Structure

```
📂 mongo-cmd-app/
├── 📂 Services/
│   ├── 🛠️ cmd-service.js       # CLI logic for 🎫 management
│   ├── 🐳 db-services.js       # MongoDB connection & 🛠️ operations
├── 📂 models/
│   └── 🎫 Ticket.js            # Mongoose 🎫 model
├── 🏁 index.js                 # Main app entry point
├── 📦 package.json             # Project 📋 metadata & 📜 dependencies
├── 🚫 .gitignore               # Ignored files 🗑️
└── 📝 README.md                # 📚 Documentation
```

## 🤝 Contribution

Contributions 🤗 welcome! 🖊️ Open an issue or submit a pull request 🚀.

## ⚖️ License

📜 Licensed under ISC. See `LICENSE` 📂 for 📝 details.

## ✍️ Author

👤 Akiva Cohen
