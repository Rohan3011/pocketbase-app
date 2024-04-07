import PocketBase from "pocketbase";

console.log();
export const pb = new PocketBase(import.meta.env.VITE_BASE_URL);
