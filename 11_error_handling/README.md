# 🚨 Error Handling in Next.js

Error handling improves the user experience by displaying a friendly error page when something goes wrong.

Instead of showing a broken page or a technical error message, Next.js allows us to create a custom error UI using a special `error.tsx` file.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand Error Boundaries
- Create an `error.tsx` file
- Handle runtime errors gracefully
- Recover from errors using the reset function

---

# 📚 What You'll Learn

- What is Error Handling?
- `error.tsx`
- Error Boundary
- `reset()`
- Real-world Examples

---

# 💻 Practice

Inside the `practice/` folder, we will:

- Create an Error UI
- Throw an error intentionally
- Recover using the Retry button

---

# 🤔 Why?

### Why do we need Error Handling?

Applications can fail because of server issues, network problems, or unexpected bugs.

Instead of crashing the application, Error Handling shows a friendly message and gives users a chance to recover.

---

# 💡 Interview Tip

### Q. What is `error.tsx` in Next.js?

**Answer:**

`error.tsx` is a special file that acts as an Error Boundary for a route segment. It displays a custom UI whenever an error occurs in that segment.

---

# 🚀 Practice Challenge

- Create `error.tsx`
- Throw an error manually
- Add a Retry button using `reset()`
- Verify that the error screen appears