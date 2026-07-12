# 🚀 Catch-All Routes

Catch-All Routes allow a single route to match **multiple URL segments**.

Instead of creating deeply nested folders, we can use a single dynamic route to handle URLs of different lengths.

For example:

- `/docs/react`
- `/docs/react/hooks`
- `/docs/react/hooks/useState`
- `/docs/react/hooks/useState/examples`

All these URLs can be handled by a single page.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand Catch-All Routes
- Capture multiple URL segments
- Access route parameters as an array
- Build flexible routing structures

---

# 📚 What You'll Learn

- Catch-All Routes (`[...slug]`)
- Route Parameters as Arrays
- Real-world Use Cases
- Difference Between Dynamic and Catch-All Routes

---

# 💻 Practice

Inside the `practice/` folder, we will build:

- Documentation Pages
- Product Categories
- Course Chapters

---

# 🤔 Why?

### Why use Catch-All Routes?

Some applications have URLs with different numbers of segments.

Instead of creating multiple nested routes, Catch-All Routes allow a single page to handle all of them.

This keeps the project clean and scalable.

---

# 💡 Interview Tip

### Q. What is a Catch-All Route in Next.js?

**Answer:**

A Catch-All Route uses the `[...slug]` syntax to match multiple URL segments. The matched values are available as an array through the `params` object.

Example:

```
/docs/react/hooks
```

Results in:

```ts
slug = ["react", "hooks"]
```

---

# 🚀 Practice Challenge

- Create `/docs/react`
- Create `/docs/react/hooks`
- Create `/docs/react/hooks/useState`
- Display all URL segments on the page