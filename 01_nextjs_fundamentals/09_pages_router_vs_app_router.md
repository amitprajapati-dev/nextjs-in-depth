# Pages Router vs App Router

## 📖 Introduction

Next.js has introduced two routing systems over time:

- **Pages Router** (Older)
- **App Router** (Modern)

If you're learning Next.js today, you should focus on the **App Router**, as it is the recommended approach for all new projects.

Understanding the differences helps you work on both new and older codebases.

---

# What is Pages Router?

The Pages Router is the older routing system based on the `pages/` directory.

Example:

```
pages/
│
├── index.tsx
├── about.tsx
└── contact.tsx
```

Generated Routes:

```
/
/about
/contact
```

It was the default routing system before Next.js 13.

---

# What is App Router?

The App Router is the modern routing system introduced in Next.js 13.

It is based on the `app/` directory.

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
/
/about
/contact
```

It supports many advanced features that the Pages Router does not.

---

# Comparison

| Feature | Pages Router | App Router |
|----------|--------------|------------|
| Folder | `pages/` | `app/` |
| Default in New Projects | ❌ | ✅ |
| React Server Components | ❌ | ✅ |
| Nested Layouts | ❌ | ✅ |
| Loading UI | ❌ | ✅ |
| Error UI | ❌ | ✅ |
| Route Groups | ❌ | ✅ |
| Streaming | ❌ | ✅ |
| Future Support | Limited | Recommended |

---

# Why App Router is Better

The App Router provides:

- Better performance
- Cleaner project structure
- Built-in layouts
- React Server Components
- Better data fetching
- Loading UI
- Error handling
- Modern architecture

Because of these improvements, App Router is now the recommended choice.

---

# Should You Learn Pages Router?

Yes, but only the basics.

Many companies still have older projects using the Pages Router.

However, for new projects and interviews, your main focus should be the App Router.

---

# Interview Questions

### Q. Which router should you use for new Next.js projects?

**Answer:**

The App Router should be used because it is the modern routing system introduced in Next.js 13 and includes features like Server Components, nested layouts, loading UI, and better performance.

---

### Q. What is the main difference between the Pages Router and the App Router?

**Answer:**

The Pages Router uses the `pages/` directory, while the App Router uses the `app/` directory. The App Router supports modern features such as React Server Components, nested layouts, streaming, and improved data fetching.

---

# Summary

- Pages Router is the older routing system.
- App Router is the modern routing system.
- New projects should use the App Router.
- Knowing both helps when working on different codebases.
- The App Router is the future of Next.js development.