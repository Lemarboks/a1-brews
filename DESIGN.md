---
name: A1 Brews
description: A tactile coffee-and-art studio identity built from roast tones, canvas paper, and sparing artist pigments.
colors:
  roasted-brown: "#552a18"
  dark-roast: "#32170f"
  canvas-cream: "#f3e7cf"
  terracotta-paint: "#c9472b"
  espresso: "#1e100c"
  coffee-ink: "#2a1711"
  cobalt-pigment: "#294ea2"
  ochre-pigment: "#d49331"
  map-paper: "#d9c49d"
  pale-roast-copy: "#ead9bd"
  white: "#ffffff"
typography:
  display: { fontFamily: "Archivo Black, Impact, sans-serif", fontSize: "clamp(4.2rem, 8.4vw, 8.2rem)", fontWeight: 900, lineHeight: 0.84, letterSpacing: "-0.04em" }
  headline: { fontFamily: "Archivo Black, Impact, sans-serif", fontSize: "clamp(3rem, 6vw, 6rem)", fontWeight: 900, lineHeight: 0.94, letterSpacing: "-0.04em" }
  title: { fontFamily: "Archivo Black, Impact, sans-serif", fontSize: "clamp(1.55rem, 2.4vw, 2.25rem)", fontWeight: 900, lineHeight: 1 }
  body: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.5 }
  label: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "1rem", fontWeight: 900 }
rounded:
  circle: "50%"
  map-pin: "50% 50% 50% 0"
spacing:
  control-y: "1rem"
  control-x: "1.3rem"
  section-edge: "clamp(1.25rem, 4vw, 4.5rem)"
  section-block: "clamp(5rem, 10vw, 10rem)"
components:
  button-primary: { backgroundColor: "{colors.terracotta-paint}", textColor: "{colors.white}", typography: "{typography.label}", padding: "{spacing.control-y} {spacing.control-x}" }
  button-light: { backgroundColor: "{colors.canvas-cream}", textColor: "{colors.roasted-brown}", typography: "{typography.label}", padding: "{spacing.control-y} {spacing.control-x}" }
  navigation-cta: { backgroundColor: "{colors.terracotta-paint}", textColor: "{colors.white}", typography: "{typography.label}", padding: "0.7rem 1rem" }
  location-chip: { textColor: "{colors.roasted-brown}", typography: "{typography.label}" }
---

# Design System: A1 Brews

## Overview

**Creative North Star: "The Working Coffee-and-Art Studio"**

A1 Brews feels like a neighbourhood coffee counter sharing a room with an active artist’s studio. Roasted-coffee fields and canvas-cream paper establish the material base; terracotta brush marks, ochre strokes, and rare cobalt pigment bring the energy of work being made nearby.

The system keeps a local-wayfinding collage structure but shifts its emotional centre toward warm, tactile craft. Condensed sign type, destination marks, map routes, framed canvases, and firm offset shadows refuse both generic beige cafés and sterile white galleries.

**Key Characteristics:**

- Roast-led brown and cream fields with terracotta as action paint.
- Cobalt and ochre used as sparing, high-impact artist pigments.
- Oversized sign lettering paired with practical condensed copy.
- Brush blocks, stamped circles, route lines, and framed canvases.
- Flat material surfaces with hard physical offsets.

## Colors

The palette begins with coffee and canvas, then introduces pigment only where a mark, artwork, or directional moment needs energy.

### Primary

- **Roasted Brown:** Principal brand brown for the wordmark, hero display, route labels, and map lines.
- **Dark Roast:** Deep sectional field for the location destination.

### Secondary

- **Terracotta Paint:** Primary action and annotation color for buttons, labels, nodes, stamps, focus rings, and the social field.

### Tertiary

- **Cobalt Pigment:** Rare cool counterpoint for route arcs, the photographed cup, and framed artwork.
- **Ochre Pigment:** Warm studio accent for headline strokes, route arcs, canvas grounds, and brush blocks.

### Neutral

- **Canvas Cream:** Default page ground, frame, light control, and text on dark fields.
- **Espresso:** Deepest surface and shadow tone for hero art, art introduction, footer, and offsets.
- **Coffee Ink:** Default copy on light canvas.
- **Map Paper:** Aged paper surface behind the drawn map.
- **Pale Roast Copy:** Supporting copy on Dark Roast.
- **White:** High-contrast text for terracotta controls and stamps.

### Named Rules

**The Roast Leads Rule.** Brown, cream, terracotta, and espresso define the brand first; pigment never replaces the coffee-led base.

**The Pigment Is Precious Rule.** Cobalt and ochre are intentional artist marks, not general interface colors.

## Typography

**Display Font:** Archivo Black (Impact fallback)  
**Body Font:** Barlow Condensed (Arial Narrow fallback)

**Character:** Archivo Black reads like painted shop signage and block-print posters. Barlow Condensed supplies the utilitarian gallery-label and neighbourhood-wayfinding voice.

### Hierarchy

- **Display** (900, 4.2rem–8.2rem, 0.84): Stacked hero slogan; uppercase and tightly tracked.
- **Headline** (900, 3rem–6rem, 0.94): Section declarations and destination prompts.
- **Title** (900, 1.55rem–2.25rem, 1): Timeline stages and smaller poster statements.
- **Body** (500, 1.15rem base, about 1.5): Descriptive and practical copy; leads may scale to about 2rem.
- **Label** (800–900, compact, uppercase): Navigation, labels, buttons, captions, and stamps.

### Named Rules

**The Painted Sign Rule.** Major headings stay short, uppercase, tightly set, and strong enough for a shopfront.

**The Ochre Stroke Rule.** Highlight a key display phrase with a shallow, rotated ochre underline rather than recoloring the text.

## Layout

Desktop alternates asymmetric two-column stages with full-width studio fields. The hero uses an approximately 41/59 split; art and location sections reverse visual weight. Copy aligns to stable fluid edges while circular objects, route arcs, brush blocks, and rotated canvases interrupt the grid.

At 900px, major columns stack and location copy moves before the map. At 680px, the header becomes 74px, navigation becomes a disclosure, actions stack, the three-stop route becomes vertical, and the footer becomes one column.

**The Clear Route Rule.** Collage may overlap and rotate, but the path to directions or Facebook remains simple and vertical.

## Elevation & Depth

Depth is physical and studio-made. Controls, coffee medallion, stamps, map pin, and framed art use crisp or translucent espresso offsets. Large backgrounds stay flat; color, borders, and pigment marks establish hierarchy.

### Shadow Vocabulary

- **Control Press** (`6px 6px 0 #1e100c`): Compresses to a 3px offset on hover.
- **Coffee Medallion** (`18px 22px 0 rgba(36,19,14,.35)`): Separates the circular hero image.
- **Framed Canvas** (`18px 22px 0 rgba(36,19,14,.45)`): Layers overlapping artwork.
- **Stamped Marker** (`8px 9px 0 #1e100c`): Lifts the destination stamp.

**The Hard Offset Rule.** Shadows describe stacked material; never soften them into glossy card elevation.

## Shapes

The base page and controls are square and poster-like. Circles mark coffee, route nodes, destinations, and the stamped identity. The location pin is a rotated teardrop; art uses thickly framed, rotated rectangles. Pigment appears as long blocks and arcs rather than decorative blobs.

**The Marked Circle Rule.** A circle identifies coffee, a route point, or a destination; it is not a default container radius.

## Components

### Buttons

- **Shape:** Square-edged printed placards.
- **Primary:** Terracotta Paint, white uppercase text, 1rem by 1.3rem padding, hard Espresso offset.
- **Hover / Focus:** Shifts 3px while compressing its shadow; focus uses a 3px terracotta outline.
- **Light:** Canvas Cream with Roasted Brown text on Dark Roast.
- **Contextual Dark:** Espresso on the Terracotta social field.

### Chips

- **Style:** Unboxed Roasted Brown uppercase location label with a Terracotta circular marker.
- **State:** Informational only.

### Cards / Containers

- **Corner Style:** Square route items and canvases; circles only for meaningful markers.
- **Background:** Large material fields replace generic cards.
- **Shadow Strategy:** Timeline content is flat; focal art and destinations receive offsets.
- **Border:** Route nodes combine Canvas Cream and Espresso; artwork has a thick Canvas Cream frame.

### Navigation

Canvas Cream sign strip with an Espresso rule and Roasted Brown stamped wordmark. Links are heavy and uppercase; Facebook is terracotta. Below 680px, a three-line control reveals a stacked panel and closes after selection.

### Destination Stamp

A rotated Terracotta circle combines A1 with a compact caption, marking the shop as the route endpoint.

### Art Canvas

Overlapping rectangles use Canvas Cream frames, Espresso offsets, one-word display labels, and diagonal Terracotta, Ochre, Cream, and Cobalt bands.

## Do's and Don'ts

### Do:

- **Do** establish compositions with a roast, espresso, or canvas base.
- **Do** use Terracotta Paint to connect actions with handmade annotation.
- **Do** reserve Cobalt and Ochre for art, route, and brush-mark moments.
- **Do** keep headings compact enough to behave like painted signs.
- **Do** preserve a direct mobile route to address, directions, and Facebook.

### Don't:

- **Don't** return to bright-blue-first branding; cobalt is a sparing pigment.
- **Don't** drift into monochrome beige café minimalism or sterile gallery styling.
- **Don't** use rounded cards as a generic container pattern.
- **Don't** replace hard offsets with diffuse dashboard shadows.
- **Don't** let brush marks obscure copy, navigation, or visit actions.
