export interface Page {
  name: string;
  emoji: string;
  path: string;
}

export const PAGES: Page[] = [
  { name: "Home", emoji: "🫧", path: "/" },
  { name: "Wishes", emoji: "🌠", path: "/wishes" },
];

export const PAGES_EMOJI: Record<string, string> = {
  "/": "🫧",
  "/wishes": "🌠",
} as const;
