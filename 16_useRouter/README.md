# 🚀 useRouter() in Next.js

The `useRouter()` hook allows us to navigate between pages programmatically.

Unlike the `Link` component, which requires a user click, `useRouter()` lets us change routes using JavaScript.

It is commonly used after form submissions, authentication, payments, or any action where navigation should happen automatically.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand `useRouter()`
- Navigate programmatically
- Redirect users after actions
- Use router methods effectively

---

# 📚 What You'll Learn

- router.push()
- router.replace()
- router.back()
- router.forward()
- router.refresh()

---

# 💻 Practice

Inside the `practice/` folder, we will:

- Navigate using buttons
- Redirect after a fake login
- Go back and forward
- Refresh the current page

---

# 🤔 Why?

Sometimes users shouldn't click a link.

For example:

- Login successful → Dashboard
- Order placed → Success page
- Payment completed → Receipt page

In these situations, `useRouter()` provides programmatic navigation.

---

# 💡 Interview Tip

### Q. What is `useRouter()`?

`useRouter()` is a Client Component hook that allows programmatic navigation and provides methods such as `push`, `replace`, `back`, `forward`, and `refresh`.

---

# 🚀 Practice Challenge

- Create navigation buttons
- Redirect after a fake login
- Use Back and Forward buttons
- Refresh the current page