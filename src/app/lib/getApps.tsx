import fs from "fs/promises";
import path from "path";
import type { Root2 } from "@/app/type/productType";

export async function getApps(): Promise<Root2[]> {
  const filePath = path.join(process.cwd(), "public", "data.json");

  const file = await fs.readFile(filePath, "utf-8");

  return JSON.parse(file);
}
