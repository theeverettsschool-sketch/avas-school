# Ava's School — Setup Guide

The app is plain files (no build step). You need two things: a place to host the files (free) and, if you want iPad ↔ MacBook sync, a free Firebase project.

## 1. Host the files (pick one)
- **Netlify Drop (easiest):** go to app.netlify.com/drop, drag the whole `app` folder onto the page. You get an https address. Bookmark it.
- **GitHub Pages:** create a repo, upload the files, Settings → Pages → deploy from `main` / root.
- **Firebase Hosting:** after step 2, `firebase deploy` from this folder.
It must be https (needed for install, sync, and read-aloud).

## 2. Firebase (for syncing devices)
1. Go to console.firebase.google.com → **Add project** (turn Analytics off).
2. **Build → Authentication → Get started → Email/Password → Enable.**
3. **Build → Firestore Database → Create database** (production mode, any region).
4. Firestore → **Rules** tab → paste and **Publish**:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /families/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
5. Project settings (gear) → **Your apps → Web (</>)** → register an app. Copy `apiKey` and `projectId`.
6. Put them in `config.js` before hosting, **or** enter them later in Parent → Settings → Cloud sync.
7. In Parent → Settings, create the family account (your email + a password), then **Sync now**.

## 3. Second device
Open the same web address, tap **"I already set this up on another device"**, sign in with the same email/password. Everything (name, PIN, progress, stars) comes across. Sync runs automatically every few minutes and when the app is reopened.

## 4. Install
- **iPad:** Safari → Share → **Add to Home Screen**.
- **MacBook:** Safari → File → **Add to Dock** (or Chrome → Install).

## 5. Backups
Parent → Backup: download the full JSON any time. The app also prompts after each finished week and month. Keep those files; Restore merges them back in.

## 6. Monthly content updates
New lessons arrive as replacement files in `js/content/` (plus `js/content/plan.js`, `sw.js`). Re-upload the folder to your host. Progress lives in the device/cloud, not the files, so updating is safe. Reopen the app twice to pick up the new version.

## 7. Georgia notes
Home study: O.C.G.A. § 20-2-690 — 180 days, 4.5 hrs/day, Declaration of Intent, annual progress report (Parent → Report). The Fulton calendar from Oct 13 gives 135 school days; Parent → Overview shows the gap and lets you add make-up days.
