# 🏷️ useParams() in Next.js

The `useParams()` hook allows us to read dynamic route parameters from the current URL.

It is commonly used to display dynamic content such as product details, user profiles, blog posts, and more.

---

# 🎯 Learning Goals

After completing this section, you will be able to:

- Understand dynamic route parameters
- Read values from the URL
- Build dynamic pages
- Display route-specific content

---

# 📚 What You'll Learn

- Dynamic Routes
- useParams()
- Reading Route Parameters
- Real-world Examples

---

# 💻 Practice

Inside the `practice/` folder, we will:

- Create dynamic routes
- Read route parameters
- Display product IDs and usernames

---

# 🤔 Why?

Many applications have pages whose content depends on the URL.

Examples:

- Product Details
- User Profile
- Blog Details
- Order Details

Instead of creating separate pages for every item, we create one dynamic page and read the parameter from the URL.

---

# 💡 Interview Tip

### Q. What is `useParams()`?

`useParams()` is a Client Component hook that returns the current dynamic route parameters as an object.

---

# 🚀 Practice Challenge

- Create `/products/[id]`
- Create `/users/[username]`
- Display the parameter on the screen
- Navigate to different URLs and observe the output