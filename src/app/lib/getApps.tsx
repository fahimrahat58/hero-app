export async function getApps() {
  const res = await fetch("http://localhost:3000/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  return res.json();
}
