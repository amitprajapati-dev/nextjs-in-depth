# 🚦 Routing in Next.js

Routing is one of the core features of Next.js.

Unlike React, where routing is configured manually using libraries like React Router, Next.js uses **File-Based Routing**. Every folder containing a `page.tsx` file inside the `app` directory automatically becomes a route.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand File-Based Routing
- Create new routes using folders
- Navigate between multiple pages
- Understand how URLs are generated
- Build a basic multi-page application

---

# 📚 What You'll Learn

- Home Route (`/`)
- About Route (`/about`)
- Contact Route (`/contact`)
- Dashboard Route (`/dashboard`)
- How folder names become URLs
- Why Next.js doesn't require React Router

---

# 💻 Practice

Inside the `practice/` folder, we will create:

- Home Page
- About Page
- Contact Page
- Dashboard Page
- Services Page
- Profile Page

---

# 🤔 Why?

### Why doesn't Next.js use React Router?

Because Next.js has **built-in File-Based Routing**, which automatically generates routes from the folder structure.

---

### Why is File-Based Routing useful?

- Less configuration
- Cleaner project structure
- Faster development
- Easier maintenance

---

# 💡 Interview Tip

### Q. What is File-Based Routing?

**Answer:**

File-Based Routing is a routing system where the folder structure automatically defines application routes. Every `page.tsx` file inside the `app` directory becomes a route without requiring manual configuration.

---

# 🚀 Practice Challenge

- Create `/about`
- Create `/contact`
- Create `/dashboard`
- Create `/services`
- Create `/profile`
- Verify that all routes work correctly

---

# 📦 Commit Message

```bash
feat(routing): add basic file-based routing pages
```

---