# 📂 Route Groups in Next.js

Route Groups help organize routes without changing the URL.

Normally, every folder inside the `app` directory becomes part of the URL.

However, sometimes we want to organize our project without affecting the URL structure.

Next.js solves this using **Route Groups**.

A Route Group is created by wrapping a folder name in parentheses `()`.

Example:

```
app/
├── (marketing)/
│   ├── about/
│   └── contact/
│
└── (dashboard)/
    ├── profile/
    └── settings/
```

The generated URLs are:

- `/about`
- `/contact`
- `/profile`
- `/settings`

Notice that **`(marketing)`** and **`(dashboard)`** are **not** included in the URL.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand Route Groups
- Organize large projects
- Create multiple layouts
- Keep URLs clean

---

# 📚 What You'll Learn

- Route Groups
- Group-specific Layouts
- Clean URL Structure
- Real-world Project Organization

---

# 💻 Practice

Inside the `practice/` folder, we will:

- Create a Marketing group
- Create a Dashboard group
- Add different layouts
- Verify that group names don't appear in the URL

---

# 🤔 Why?

### Why use Route Groups?

As projects grow, the `app` folder becomes difficult to manage.

Route Groups let us organize related pages together without changing the application's URLs.

This makes the project easier to maintain.

---

# 💡 Interview Tip

### Q. What is a Route Group?

**Answer:**

A Route Group is a folder wrapped in parentheses `()` that helps organize routes without affecting the URL structure.

---

# 🚀 Practice Challenge

- Create `(marketing)` group
- Create `(dashboard)` group
- Add separate layouts
- Verify the URLs remain clean