# Deploying Kurumbuka to Vercel — Step-by-Step Guide

No prior hosting experience needed. This takes about 10 minutes.

---

## Prerequisites

You need three free accounts. Create them if you don't have them yet:

1. **GitHub** — https://github.com  
2. **Vercel** — https://vercel.com (sign up with your GitHub account)
3. **Node.js installed locally** — https://nodejs.org (download the LTS version)

---

## Step 1 — Install Git (if you don't have it)

Download and install Git from https://git-scm.com/downloads  
After installing, open a terminal (Command Prompt or PowerShell on Windows) and confirm:

```bash
git --version
```

---

## Step 2 — Create a GitHub Repository

1. Go to https://github.com/new  
2. Name it `kurumbuka` (or anything you like)  
3. Set it to **Public**  
4. Do NOT check "Add a README file"  
5. Click **Create repository**  
6. Copy the repository URL — it looks like:  
   `https://github.com/YOUR_USERNAME/kurumbuka.git`

---

## Step 3 — Push the Project to GitHub

Open a terminal inside your `kurumbuka` project folder and run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit — Kurumbuka website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kurumbuka.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

After this you should see all your files on GitHub.

---

## Step 4 — Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub  
2. Click **"Add New → Project"**  
3. You'll see a list of your GitHub repos — find `kurumbuka` and click **Import**  
4. Vercel will auto-detect the settings. You don't need to change anything because `vercel.json` is already configured.  
5. Click **Deploy**

Vercel will build and deploy your site. In about 60 seconds you'll get a live URL like:  
`https://kurumbuka.vercel.app`

---

## Step 5 — Connect a Custom Domain (Optional)

If you have a custom domain (e.g. `kurumbuka.org`):

1. In your Vercel project dashboard, go to **Settings → Domains**  
2. Enter your domain and click **Add**  
3. Vercel will show you DNS records to add at your domain registrar  
4. Add those records and wait a few minutes for it to propagate  

Vercel also automatically provides HTTPS (SSL) for free.

---

## Future Updates — How to Re-deploy

Every time you make changes to the code, just run:

```bash
git add .
git commit -m "What you changed"
git push
```

Vercel automatically detects the push and re-deploys within about 30 seconds. No manual action needed.

---

## Troubleshooting

**"Command not found: git"** → Install Git from https://git-scm.com  
**"Permission denied (publickey)"** → Use HTTPS instead of SSH for the remote URL  
**Build failed on Vercel** → Check that `server.js` and `vercel.json` are in the root of the project  
**Static files not loading** → Confirm all files are inside the `public/` folder  

---

## Project File Structure

```
kurumbuka/
├── server.js          ← Express server (entry point)
├── vercel.json        ← Vercel deployment config
├── package.json       ← Node dependencies
├── .gitignore
└── public/
    ├── index.html     ← Homepage
    ├── about.html
    ├── ali.html
    ├── trek.html
    ├── get-involved.html
    ├── rafiki.html
    ├── css/
    │   ├── global.css
    │   └── home.css
    └── js/
        ├── main.js
        └── components.js
```
