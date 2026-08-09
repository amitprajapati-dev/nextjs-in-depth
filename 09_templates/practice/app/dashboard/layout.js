export default function RootLayout({ children }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
        <h1> Dashboard Layout</h1>
        {children}
    </div>
  );
}