export async function getApps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch apps");
  }

  return res.json();
}
