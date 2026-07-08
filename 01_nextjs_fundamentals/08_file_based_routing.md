# File-Based Routing

## 📖 Introduction

Routing is one of the most important concepts in Next.js.

Unlike React, where developers configure routes manually using React Router, Next.js creates routes automatically based on the folder and file structure.

This feature is called **File-Based Routing**.

---

# 🤔 What is File-Based Routing?

File-Based Routing means:

> Every folder and `page.tsx` file inside the `app` directory automatically becomes a route.

You don't need to write routing configuration.

---

# Basic Example

Project Structure

```
app/
│
├── page.tsx
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
└── blog/
    └── page.tsx
```

Generated Routes

```
/           → Home
/about      → About
/contact    → Contact
/blog        → Blog
```

Next.js creates these routes automatically.

---

# Home Route

```
app/page.tsx
```

URL

```
/
```

---

# About Route

```
app/about/page.tsx
```

URL

```
/about
```

---

# Contact Route

```
app/contact/page.tsx
```

URL

```
/contact
```

---

# Nested Routes

Folders can contain other folders.

Example:

```
app/
│
└── dashboard/
    ├── page.tsx
    ├── users/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

Generated URLs

```
/dashboard
/dashboard/users
/dashboard/settings
```

---

# Why is File-Based Routing Better?

Without File-Based Routing:

- Install React Router
- Configure routes manually
- Maintain route files

With Next.js:

- Create a folder
- Add `page.tsx`
- Route is ready ✅

---

# Real-World Example

Suppose you're building a school management system.

```
app/
│
├── students/
├── teachers/
├── classes/
├── exams/
└── results/
```

Generated URLs:

```
/students
/teachers
/classes
/exams
/results
```

No additional routing code is required.

---

# Advantages

- Very easy to understand
- Faster development
- Clean folder structure
- No manual routing setup
- Easy maintenance
- Less boilerplate code

---

# 🎤 Interview Questions

### Q. What is File-Based Routing?

**Answer:**

File-Based Routing is a routing system where the folder and file structure automatically define application routes. Every `page.tsx` file inside the `app` directory becomes a route without requiring manual configuration.

---

### Q. Which file creates a route in the App Router?

**Answer:**

The `page.tsx` file creates a route. Every folder containing a `page.tsx` file automatically becomes a URL.

---

# 📝 Summary

- File-Based Routing is one of Next.js's core features.
- Routes are created automatically from the `app` directory.
- Every `page.tsx` file becomes a route.
- Nested folders create nested routes.
- It removes the need for manual route configuration.