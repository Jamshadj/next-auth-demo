Next.js Authentication with NextAuth.js

This project implements authentication in a Next.js application using NextAuth.js with credentials-based authentication. It reads user data from a JSON file and verifies credentials before granting access.

🚀 Features

NextAuth.js Integration with credentials provider

JWT-based authentication for session management

Custom login page (/login)

User data stored in a JSON file for quick prototyping

📌 Technologies Used

Next.js (App Router)

NextAuth.js (Authentication)

TypeScript (Type safety)

Tailwind CSS (Optional for styling)

Node.js File System (fs) for reading user data

📂 Project Structure

📦 project-root
 ┣ 📂 app
 ┃ ┣ 📂 api
 ┃ ┃ ┗ 📂 auth
 ┃ ┃ ┃ ┗ 📜 [...nextauth].ts  # NextAuth handler
 ┃ ┣ 📜 layout.tsx           # Root layout
 ┃ ┣ 📜 page.tsx             # Home page
 ┣ 📂 data
 ┃ ┗ 📜 userData.json        # User database
 ┣ 📜 next.config.js         # Next.js configuration
 ┣ 📜 README.md              # Documentation
 ┗ 📜 package.json           # Project dependencies

🛠 Setup & Installation

1️⃣ Clone the repository

git clone https://github.com/your-repo.git
cd your-repo

2️⃣ Install dependencies

yarn install  # or npm install

3️⃣ Run the development server

yarn dev  # or npm run dev

4️⃣ Open the application in the browser

http://localhost:3000

🔑 Authentication Flow

Users enter their email and password on the /login page.

Credentials are validated against userData.json.

If valid, a JWT session is created.

Authenticated users can access protected pages.

🔐 Securing Passwords (IMPORTANT!)

🚨 Warning: This project currently stores plaintext passwords in userData.json. For production, implement password hashing (bcrypt) and use a secure database.

Example using bcrypt:

import bcrypt from 'bcrypt';
const hashedPassword = await bcrypt.hash(password, 10);
const isValid = await bcrypt.compare(inputPassword, storedHashedPassword);

📝 License

This project is licensed under the MIT License.

📞 Support

For issues, feel free to open an issue or contribute via a pull request.
