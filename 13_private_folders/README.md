# 🔒 Private Folders in Next.js

Private Folders allow us to organize project files without creating routes.

A folder that starts with an underscore (`_`) is ignored by the Next.js routing system.

This is useful for keeping helper files, reusable components, utilities, or internal modules close to a route without exposing them as URLs.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand Private Folders
- Keep route-related files organized
- Prevent unwanted routes
- Build a cleaner project structure

---

# 📚 What You'll Learn

- What is a Private Folder?
- `_folderName` convention
- Route Organization
- Real-world Use Cases

---

# 💻 Practice

Inside the `practice/` folder, I will:

- Create a private folder
- Store reusable components
- Verify that private folders don't create routes

---

# 🤔 Why?

### Why use Private Folders?

Large applications often need helper files, reusable components, constants, or utility functions that belong to a specific route.

Private folders keep these files organized without making them accessible through a URL.

---

# 💡 Interview Tip

### Q. What is a Private Folder in Next.js?

**Answer:**

A Private Folder is a folder whose name starts with an underscore (`_`). Next.js ignores it when creating routes, making it useful for organizing internal files.

---

# 🚀 Practice Challenge

- Create `_components`
- Create `_utils`
- Import a component from `_components`
- Verify that `/_components` does not exist