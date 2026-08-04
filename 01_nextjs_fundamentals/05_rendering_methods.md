# Rendering Methods

## 📖 Introduction

Rendering is the process of converting React components into HTML so that users can see a webpage.

One of the biggest strengths of Next.js is that it supports multiple rendering strategies.

Choosing the correct rendering method directly affects performance, SEO, and user experience.

---

# What is Rendering?

Rendering means:

> **Converting React components into HTML that the browser can display.**

Example:

React Component

```jsx
export default function Home() {
    return <h1>Hello World</h1>;
}
```

Generated HTML

```html
<h1>Hello World</h1>
```

---

# 1. Client-Side Rendering (CSR)

In CSR, the browser downloads JavaScript first.

React then creates the HTML inside the browser.

Flow:

```
Browser
    ↓
Download JavaScript
    ↓
React Runs
    ↓
Generate HTML
    ↓
Display Page
```

### Advantages

- Rich interactivity
- Great for dashboards
- Smooth navigation

### Disadvantages

- Slower initial load
- Poor SEO

---

# 2. Server-Side Rendering (SSR)

In SSR, the server generates HTML before sending it to the browser.

Flow:

```
Browser
    ↓
Request
    ↓
Server
    ↓
Generate HTML
    ↓
Browser
```

### Advantages

- Better SEO
- Faster first paint
- Fresh data

### Disadvantages

- Server work increases

---

# 3. Static Site Generation (SSG)

Pages are generated at build time.

No server rendering is required for every request.

Perfect for:

- Blogs
- Documentation
- Landing Pages

Advantages:

- Extremely Fast
- Excellent SEO
- Low Server Cost

---

# 4. Incremental Static Regeneration (ISR)

ISR combines SSG with automatic updates.

Pages are static but can be regenerated after a specific interval.

Perfect for:

- News
- E-commerce
- Product Listings

Benefits:

- Fast
- SEO Friendly
- Updated Content

---

# 5. Partial Prerendering (PPR)

A newer rendering approach.

Static content is served immediately.

Dynamic parts load later.

Result:

- Faster perceived performance
- Better user experience

---

# Comparison Table

| Method | SEO | Speed | Dynamic Data | Best For |
|---------|-----|-------|--------------|----------|
| CSR | ❌ | Medium | ✅ | Dashboards |
| SSR | ✅ | Fast | ✅ | E-commerce |
| SSG | ✅ | Fastest | ❌ | Blogs |
| ISR | ✅ | Fast | ✅ | Product Pages |
| PPR | ✅ | Very Fast | ✅ | Mixed Content |

---

# Which One Should You Choose?

Use CSR when:

- Authentication
- Dashboard
- Admin Panel

Use SSR when:

- User-specific data
- SEO matters
- Fresh data is required

Use SSG when:

- Blogs
- Portfolio
- Documentation

Use ISR when:

- Products
- News
- Frequently updated content

Use PPR when:

- Large modern applications
- Mixed static and dynamic pages

---

# 🎯 Interview Questions

### Q. What are the rendering methods in Next.js?

**Answer:**

Next.js supports:

- CSR
- SSR
- SSG
- ISR
- PPR

Each rendering strategy is designed for different use cases based on performance, SEO, and data freshness requirements.

---

### Q. Which rendering method is best?

There is no single best rendering method.

The best choice depends on the application's requirements.

---

# 📝 Summary

Rendering determines how HTML is generated and delivered to the browser.

Choosing the correct rendering strategy helps improve performance, SEO, scalability, and user experience.