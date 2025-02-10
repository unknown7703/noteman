```md
# Noteman  

**Noteman** is a powerful and flexible note-taking and knowledge management app designed to help you stay organized, collaborate, and streamline your workflow. It provides a rich text editor, real-time synchronization, and structured data organization, making it ideal for personal and professional use.  

## ✨ Features  
- Rich text editor with markdown support  
- Drag-and-drop organization for notes and databases  
- Multi-user collaboration with real-time syncing  
- Secure authentication and cloud storage  
- Customizable workspaces and nested structures  

## 🛠 Tech Stack  
- **Next.js** – React framework for building web applications  
- **ShadCN** – UI components for styling  
- **Tailwind CSS** – Utility-first CSS framework  
- **TypeScript** – Strongly typed JavaScript  
- **Convex DB** – Backend database for real-time data synchronization  
- **Edge Store** – Secure cloud storage solution  
- **Clerk Auth** – Authentication and user management  

## 🚀 Getting Started  

Follow these steps to run Noteman locally:  

### 1️⃣ Install Packages  
```sh
npm i & yarn install
```  

### 2️⃣ Setup Environment Variables  
Create a `.env` file in the root directory and add the following:  
```sh
# CLERK AUTHORIZATION ENVIRONMENT VARIABLES
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# CONVEX ENVIRONMENT VARIABLES
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# DOMAIN
NEXT_PUBLIC_DOMAIN=

# EDGE STORE
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```  

### 3️⃣ Setup Convex  
Run the following command to start Convex locally:  
```sh
npx convex dev
```  

### 4️⃣ Start the App  
Run the development server:  
```sh
npm run dev
```  

The app will be available at `http://localhost:3000`.
```
