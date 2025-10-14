/// <reference types="@sveltejs/kit" />
/// <reference types="mdsvex/globals" />
declare module "*.md" {
  export { SvelteComponentDev as default } from "svelte/internal";
  export { metadata };
}