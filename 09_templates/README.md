# 📄 Templates in Next.js

Templates are similar to Layouts, but they behave differently during navigation.

A Layout is preserved between page navigations, while a Template is recreated every time a user navigates to a new page.

Templates are useful when you want a fresh UI state on every navigation.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand what Templates are
- Learn the difference between Layouts and Templates
- Know when to use Templates
- Build a template for multiple pages

---

# 📚 What You'll Learn

- What is a Template?
- Layout vs Template
- How Templates work
- Real-world use cases

---

# 💻 Practice

Inside the `practice/` folder, we will:

- Create a Template
- Compare it with a Layout
- Observe the behavior during navigation

---

# 🤔 Why?

### Why do we need Templates?

Sometimes we don't want to preserve the UI state between pages.

Templates recreate the UI every time a new page is visited.

---

# 💡 Interview Tip

### Q. What is the difference between Layout and Template?

**Answer:**

Layouts preserve state during navigation because they are reused.

Templates create a new instance on every navigation, so state is reset each time.

---

# 🚀 Practice Challenge

- Create a template
- Navigate between pages
- Observe the difference from Layouts