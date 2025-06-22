<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->




























# 🛍️ MyStore – Next.js 15 AppScrip Assignment

This is a mini replica of a , performant e-commerce frontend built using **Next.js 15**. It supports dynamic routing, the App Router architecture, and is optimized for deployment on **Netlify**.

---

## ⚙️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Styling:** CSS Modules
- **Language:** JavaScript
- **Linting:** ESLint (`eslint.config.mjs`)

---

## 📁 Project Structure

.
├── app/ # App Router (if used)
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── public/ # Static assets
├── styles/ # CSS or Tailwind styles
├── utils/ # Constants and utility functions
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── netlify.toml # Netlify deployment config
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hardrock1997/Appscrip-task-Yash_Mundra.git
cd Appscrip-task-Yash_Mundra

2. Install Dependencies
npm install
# or
yarn

3. Run the Development Server

npm run dev
# or
yarn dev

Open http://localhost:3000 to view it in your browser.

🏗️ Building for Production

npm run build

☁️ Deploying to Netlify
Step 1: Push to GitHub
Ensure your project is committed and pushed to a GitHub repository.

Step 2: Connect to Netlify
Visit Netlify and log in or sign up.

Click "Add new site" > "Import an existing project".

Connect your GitHub repository.

Step 3: Configure Build Settings
Build Command:

bash
Copy
Edit
npm run build
Publish Directory:

lua
Copy
Edit
.next
Install Command (optional):

bash
Copy
Edit
npm install
🧩 Optional: netlify.toml File
To customize the build process or add redirects, create a netlify.toml file in your project root:

toml
Copy
Edit
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
🔐 Environment Variables
If your app uses environment variables:

Create a .env.local file:

ini
Copy
Edit
NEXT_PUBLIC_API_URL=https://api.example.com
In Netlify, go to:
Site Settings > Environment Variables
and add each variable manually.

✅ Important Files to Commit
Make sure the following files are in your GitHub repository:

.gitignore

package.json

package-lock.json or yarn.lock

next.config.mjs

eslint.config.mjs

jsconfig.json

netlify.toml (optional)

README.md

🙌 Author
Your Yash Mudra
GitHub: vicfirth1997 / hardrock1997
Email: yashmundra1997@gmail.com

📄 License
This project is licensed under the MIT License.

