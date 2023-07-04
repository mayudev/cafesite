import type { CollectionEntry } from "astro:content";

export const getUniqueTags = (posts: CollectionEntry<"posts">): string[] => {
  const uniqueTags = [...new Set(posts.map((post) => post.data.tags).flat())];
  return uniqueTags;
};
