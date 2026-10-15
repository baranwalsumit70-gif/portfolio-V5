# shadcn/ui Design System

A file-system design system rebuilt from **shadcn/ui** — the open-source, copy-paste React component collection built on Radix primitives and Tailwind CSS. This project recreates its **New York**, neutral-base theme as portable tokens, CSS, and framework-light React components.

## Source
- GitHub: https://github.com/shadcn-ui/ui (branch `main`, path `apps/v4`)
- Theme + tokens: `apps/v4/app/globals.css`
- Components: `apps/v4/registry/new-york-v4/ui/*.tsx`
- Fonts: Geist & Geist Mono (Google Fonts) — declared in `apps/v4/lib/fonts.ts`

Explore the repo above to go deeper; every value here (paddings, radii, oklch colors) was copied from that source, not approximated.

---

## Content fundamentals
How shadcn/ui writes copy:
- **Voice:** plain-spoken, confident, developer-to-developer. Short declaratives. "Copy and paste it into your apps." "This is not a component library. It is how you build your component library."
- **Casing:** the wordmark is lowercase (`shadcn/ui`). UI labels use **sentence case** ("Edit profile", "Create project", "Log out"), never Title Case buttons.
- **Person:** addresses **you** directly ("Make changes to your account here"). Imperative for actions ("Add to library", "Deploy").
- **Tone:** understated, never salesy. No exclamation-heavy marketing. Microcopy is terse and functional.
- **Emoji:** none in product UI.
- **Vibe:** calm, precise, monochrome. Content gets out of the way of the interface.

Examples: `Heads up! You can add components to your app using the CLI.` · `Your card was declined.` · `INV001 · Paid · $250.00`.

---

## Visual foundations
- **Color:** achromatic by default. `--primary` is pure black (`oklch(0% 0 0)`) on white `--background`; neutrals are zero-chroma oklch grays. The **only** saturated colors are `--destructive` (red) and the **blue** chart ramp (`--chart-1`…`--chart-5`). Max one accent per view. Full dark theme under `.dark`.
- **Type:** Geist (UI + headings), Geist Mono (code). Headings use tight tracking (`-0.025em`) and semibold (600); body is 14px (`text-sm`) medium/regular. No display serif.
- **Spacing:** 4px base unit; everything is a multiple (Tailwind scale). Generous internal card padding (24px), tight control padding.
- **Radius:** one `--radius` token (0.625rem / 10px) drives a derived ramp — sm 6 · md 8 · lg 10 · xl 14. Buttons/inputs use md; cards use xl; badges/avatars are full-round.
- **Borders:** 1px `--border` (light gray) everywhere — the system leans on hairline borders far more than shadow.
- **Shadows:** very subtle, near-black, low-opacity (`shadow-xs`/`sm` on controls & cards; `md`/`lg` only on popovers/dialogs). No colored or glowing shadows.
- **Backgrounds:** flat solid fills. No gradients, no imagery, no texture, no patterns.
- **Hover:** solid fills darken via opacity (`primary/90`, `secondary/80`); quiet buttons gain an `--accent` fill; links underline.
- **Press/active:** brief opacity drop (~0.6–0.9). No bounce or scale.
- **Focus:** a 3px `--ring`/50 outline ring **plus** border-color shift — the signature shadcn focus treatment. Invalid fields swap the ring to destructive.
- **Motion:** minimal. 150ms color/shadow transitions; accordions/menus fade+zoom 95%→100%. Skeletons pulse. No decorative animation.
- **Transparency/blur:** used sparingly — dialog overlay is `black/50`; `color-mix` produces translucent hover tints. No frosted glass.
- **Cards:** white surface, 1px border, xl radius, `shadow-sm`, 24px vertical rhythm between header/content/footer. Never a colored left-border accent.

---

## Iconography
- **System:** [Lucide](https://lucide.dev) — the icon set shadcn/ui ships with. Outline style, 2px stroke, 24×24 viewBox, `round` linecaps/joins, rendered at 16px (`size-4`) inside controls.
- **In this project:** components that need a structural glyph (accordion/select chevron, dialog close ✕, checkbox check, breadcrumb separator) inline the exact Lucide path data. For richer sets in cards/kits, load Lucide from CDN (`https://unpkg.com/lucide@latest`) or paste individual SVGs — match the 2px-stroke outline style.
- **No** emoji, no filled/duotone icon families, no unicode-as-icon. Icons are monochrome (`currentColor`) and inherit text color; muted icons use `--muted-foreground`.

---

## Index
- `styles.css` — the single entry point consumers link. Imports fonts + all tokens + `components.css`.
- `tokens/` — `colors.css`, `typography.css`, `radius.css`, `spacing.css`, `elevation.css`, `fonts.css`.
- `components.css` — semantic component classes (`.ds-btn`, `.ds-card`, …) expressed against the tokens.
- `components/` — React components, grouped:
  - **core/** — Button, Badge, Card, Avatar, Separator, Skeleton, Kbd
  - **forms/** — Input, Textarea, Label, Checkbox, RadioGroup, Switch, Select, Toggle
  - **feedback/** — Alert, Progress, Tooltip
  - **navigation/** — Tabs, Accordion, Breadcrumb
  - **overlays/** — Dialog, DropdownMenu
  - **data/** — Table
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `assets/` — sample avatars, favicon, placeholder image copied from the repo.

### Intentional additions
- **Kbd** — a keyboard-key chip; shadcn ships one in the registry, included here for shortcut hints.

### Notes & caveats
- Interactive components (Tabs, Accordion, Dialog, DropdownMenu, Tooltip, Toggle) are **simplified cosmetic recreations** — they reproduce the visuals and basic open/close behavior without Radix's full accessibility wiring (focus trapping, portals, keyboard nav). For production, install the real shadcn components.
- **Select/Dropdown**: `Select` is a styled native `<select>`; the popover-style `SelectContent` from the registry is represented by the `.ds-menu` surface used in DropdownMenu.
- **Logo:** the repo ships no standalone wordmark SVG; the brand is rendered as plain Geist type (`shadcn/ui`).
- **Fonts** load from Google Fonts (Geist family), matching the repo's `next/font/google` setup.
