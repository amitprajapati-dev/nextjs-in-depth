function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default async function DashboardPage() {

  await wait(3000);

  return (
    <main>
      <h1>Dashboard</h1>
    </main>
  );
}