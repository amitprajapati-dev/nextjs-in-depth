# App Router

## 📖 Introduction

Starting from **Next.js 13**, the App Router became the recommended routing system.

It is built on top of React Server Components and provides a modern way to build scalable, fast, and maintainable applications.

Today, whenever you create a new Next.js project, the **App Router** is used by default.

---

# 🤔 What is App Router?

The App Router is the routing system based on the **app/** directory.

Instead of configuring routes manually, Next.js automatically creates routes based on your folder structure.

Example:

```
app/
│
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx
```

Generated Routes:

```
/          → Home
/about     → About
/contact   → Contact
```

No routing configuration is required.

---

# 🚀 Why was App Router introduced?

The Pages Router worked well, but modern applications needed better support for:

- Nested Layouts
- Server Components
- Streaming
- Loading UI
- Error Handling
- Better Data Fetching
- Improved Performance

The App Router solves these problems while keeping routing simple.

---

# ⭐ Key Features

## 1. File-Based Routing

Every folder inside `app/` can become a route.

---

## 2. Nested Layouts

Different pages can share the same layout without repeating code.

---

## 3. React Server Components

Server Components are enabled by default.

This improves performance and reduces JavaScript sent to the browser.

---

## 4. Loading UI

Each route can have its own loading screen using:

```
loading.tsx
```

---

## 5. Error Handling

Each route can have its own error page.

```
error.tsx
```

---

## 6. Route Groups

Allows better folder organization without affecting the URL.

---

## 7. Parallel Routes

Different sections of the page can load independently.

---

## 8. Intercepting Routes

Useful for modals and advanced navigation patterns.

---

# 🌍 Real-World Example

Imagine building an e-commerce website.

```
app/
│
├── products/
├── cart/
├── checkout/
├── orders/
└── profile/
```

Each folder automatically becomes a route.

This makes the project clean and easy to maintain.

---

# 🎯 Advantages

- Less configuration
- Better performance
- Easier maintenance
- Cleaner project structure
- Built-in layouts
- Better developer experience

---

# 🎤 Interview Questions

### Q. What is the App Router?

**Answer:**

The App Router is the modern routing system introduced in Next.js 13. It uses the `app` directory to create routes automatically and supports features like Server Components, nested layouts, loading UI, error handling, and streaming.

---

# 📝 Summary

- App Router is the modern routing system in Next.js.
- It is based on the `app` folder.
- It supports Server Components by default.
- It provides layouts, loading UI, error handling, and better performance.
- It is the recommended routing system for all new Next.js projects.