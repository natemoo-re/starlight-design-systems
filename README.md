# Starlight for Design Systems

> [!WARNING]
> **Use at your own risk!** This is a proof of concept and is not actively maintained (yet)

### What is this?

Currently, a package called `starlight-design-systems`, a vanilla JS demo, and a React demo.

The main package exports some Astro-based web components which wrap native form controls to emit `starlight:knobchange` events with a payload. It also exposes a `getInitialProps` function and a `listen` function that allows JS frameworks to easily hook into the native events.

### What's next?

The goal is that these primitives could become the basis for a [Starlight](https://starlight.astro.build/) integration that automatically wires up interactive previews for design system components.

**Proof of Concept**
- [x] Hooks for Vanilla JS
- [x] Hooks for React components
- [ ] Hooks for Preact components
- [ ] Hooks for Vue components
- [ ] Hooks for Svelte components
- [ ] Hooks for Solid components
- [ ] An API contract for a `components` collection
- [ ] An integration that generates routes for stories
- [ ] An `iframe` component that loads those generated routes
- [ ] A better component names than Knobs (my apologies to the brits)

**Releases**
- [x] Formatting w/ Biome
- [ ] Tests w/ Vitest (or `node:test`)
- [ ] CI workflows w/ GitHub Actions

### References / Prior Art
- **Framer's [Property Controls](https://www.framer.com/developers/property-controls).** The design here is great, the APIs are quite flexible, and there are clever primitives that you don't see too often.
- **Storybook's [Controls](https://storybook.js.org/docs/essentials/controls)**. The OG example.
- **Storybook's [Actions](https://storybook.js.org/docs/essentials/actions)**. Nice way to expose event handlers.
