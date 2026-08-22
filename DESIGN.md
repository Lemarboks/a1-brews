---
name: A1 Brews
description: An expressionist café broadside where coffee, art, thrift, and community share one painted room.
colors:
  gallery-black: "#100d0a"
  coffee-ink: "#20120b"
  parchment: "#ead7aa"
  parchment-light: "#f3e5bd"
  parchment-muted: "#d6c18e"
  molten-amber: "#f0a51b"
  burnt-orange: "#d65418"
  oxblood: "#7c1f16"
  petrol-blue: "#0e3b4c"
  studio-teal: "#315c59"
typography:
  display: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(4rem, 8vw, 7.3rem)", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.025em" }
  headline: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(3.2rem, 6.8vw, 6rem)", fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.02em" }
  title: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(2.4rem, 4vw, 4rem)", fontWeight: 400, lineHeight: 0.9 }
  body: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.5 }
  label: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "1rem", fontWeight: 800 }
rounded:
  none: "0"
spacing:
  control-y: "0.95rem"
  control-x: "1.25rem"
  page-edge: "clamp(1.2rem, 4vw, 4.5rem)"
  section-block: "clamp(5rem, 10vw, 10rem)"
components:
  button-oxblood: { backgroundColor: "{colors.oxblood}", textColor: "{colors.parchment-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  button-petrol: { backgroundColor: "{colors.petrol-blue}", textColor: "{colors.parchment-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  button-amber: { backgroundColor: "{colors.molten-amber}", textColor: "{colors.gallery-black}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  paint-label: { backgroundColor: "{colors.petrol-blue}", textColor: "{colors.parchment-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "0.35rem 0.65rem" }
  navigation-cta: { backgroundColor: "{colors.oxblood}", textColor: "{colors.parchment-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "0.7rem 1rem" }
---

# Design System: A1 Brews

## Overview

**Creative North Star: "The Expressionist Café Broadside"**

A1 Brews is presented as a living café canvas: a dense, warm room where coffee, local art, thrift, and community sit at the same table. The visual world translates the pinned expressionist reference into a broadside-like interface—near-black framing, parchment panels, molten amber light, burnt-orange marks, oxblood emphasis, and blue-green pigment.

The production artwork is the emotional anchor: visible impasto, crowded café energy, a monumental cup, painterly light, and art materials in use. Around it, poster-scale typography, rough-edged labels, split-canvas staging, hard borders, and physical offset shadows give the site the urgency of a hand-pulled event poster rather than a polished café template or sterile gallery.

**Key Characteristics:**

- Near-black framing against parchment message panels.
- Expressionist impasto imagery with coffee and community sharing focus.
- Anton poster typography paired with Barlow Condensed utility copy.
- Oxblood, amber, burnt orange, petrol, and teal used as saturated paint fields.
- Split-canvas hero, oversized poster blocks, paint labels, and hard offsets.

## Colors

The palette behaves like oil paint under warm café light: dense black framing, aged paper, molten highlights, red-orange heat, and deep blue-green shadow.

### Primary

- **Gallery Black:** The page frame, header, footer, artwork ground, border color, and universal hard-shadow tone.
- **Parchment:** The principal reading surface and warm paper counterweight to the dark frame.

### Secondary

- **Molten Amber:** High-energy highlight for actions, poster fields, route punctuation, and illuminated details.
- **Burnt Orange:** Structural paint stripe, social closing field, border accent, and active warmth.
- **Oxblood:** Emotional emphasis for the hero keyword, manifesto field, rust button, and poster lettering.

### Tertiary

- **Petrol Blue:** Cool paint label, community panel, Facebook action, and rhythm field.
- **Studio Teal:** Map field and supporting blue-green material surface.

### Neutral

- **Coffee Ink:** Body copy on parchment.
- **Parchment Light:** Highest-contrast warm text on saturated or black fields.
- **Parchment Muted:** Secondary notes on near-black.

### Named Rules

**The Black Frame Rule.** Gallery Black must visibly frame the experience through headers, borders, gutters, or hard shadows; it gives the paint fields their force.

**The Painted Field Rule.** Saturated colors occupy decisive poster-scale regions or specific labels. Avoid scattering them as tiny decorative accents.

## Typography

**Display Font:** Anton (Impact fallback)  
**Body Font:** Barlow Condensed (Arial Narrow fallback)

**Character:** Anton has the blunt vertical force of a gig poster or painted window sign. Barlow Condensed keeps longer copy practical, compressed, and slightly editorial; its italic option belongs only in occasional human annotations.

### Hierarchy

- **Display** (400, 4rem–7.3rem, 0.9): Hero stack and dominant calls; uppercase and tightly set.
- **Headline** (400, 3.2rem–6rem, 0.92): Manifesto, happenings, visit, and major poster statements.
- **Title** (400, 2.4rem–4rem, 0.9): Four-world headings and strong local statements.
- **Body** (500, 1.15rem, 1.5): Descriptive and practical content; lead copy scales to 1.6rem–2.4rem.
- **Label** (800, compact, uppercase): Navigation, buttons, paint labels, captions, and annotations.

### Named Rules

**The Broadside Voice Rule.** Display copy stays short, uppercase, and compositionally oversized; paragraph-length content never uses Anton.

**The One Red Word Rule.** Oxblood may isolate one emotionally decisive word inside a black display stack, as “Community” does in the hero.

## Layout

The hero is a full-height split canvas: approximately 39% parchment message panel and 61% expressionist artwork. Subsequent sections alternate two-column manifestos, four poster fields, rotated broadside panels, rhythm strips, and map-plus-address staging. Heavy black borders and gutters make neighboring color fields feel separately printed and assembled.

At 900px, hero, manifesto, happenings, and visit sections become one column; the visit copy moves above its map. At 680px, navigation becomes a disclosure, the four-world grid becomes one column, the hero artwork reduces to 470px, poster borders become thinner, and closing lines lose their desktop indents.

**The Split Canvas Rule.** Pair one legible message field with one immersive artifact or poster field; do not subdivide either side into dashboard-like cards.

## Elevation & Depth

Depth comes from printed sheets, mounted paintings, and paint daubs. Buttons and labels use square black offset shadows; the happenings poster is rotated and enlarged inside a black border; the map pin uses a black frame with an amber offset. Artwork itself supplies deep painterly space while the interface remains materially flat.

### Shadow Vocabulary

- **Paint Label** (`5px 6px 0 #100d0a`): Small rough-edged label lift.
- **Poster Button** (`7px 8px 0 #100d0a`): Default action lift, compressed to 4px by 5px on hover.
- **Map Marker** (`14px 16px 0 #f0a51b`): Amber offset behind the black-framed location block.
- **Map Divider** (`8px 0 0 #100d0a`): Desktop split-canvas seam; becomes a top offset when stacked.

**The Printed Layers Rule.** Shadows are opaque, directional, and hard; never introduce soft ambient card shadows or glass effects.

## Shapes

The form language is rectangular, cropped, and rough-edged. Buttons, labels, panels, world blocks, and the map marker have square corners. Rotation of -1° to -5° supplies handmade irregularity. Thick black borders, overscaled background letters, and paint stripes create silhouettes; no rounded-card vocabulary is present.

## Components

### Buttons

- **Shape:** Square poster label with a hard black offset.
- **Oxblood:** Directions action on parchment.
- **Petrol:** Facebook action on near-black.
- **Amber:** Map action with black text.
- **Hover / Focus:** Shift 3px down/right with a slight -1° rotation; focus uses a 3px Amber outline at 4px offset.

### Chips

- **Paint Label:** Petrol rectangle, Parchment Light uppercase text, slight -1° rotation, black offset.
- **Light Variant:** Parchment surface with Gallery Black text on dark sections.

### Cards / Containers

- **Poster Fields:** Two-up grid of Amber, Petrol, Parchment, and Burnt Orange with 4px Gallery Black borders.
- **World Marker:** Oversized Anton character paired with a title and compact description.
- **Happenings Poster:** Amber sheet, 18px black frame, -2° rotation, slight scale-up.

### Navigation

An 84px Gallery Black header with Parchment type and a 3px Burnt Orange rule. The A1 mark uses Amber; ordinary links become Amber on hover, while Facebook is an Oxblood block. Below 680px, an Amber three-line control reveals a stacked black panel.

### Split-Canvas Hero

The left parchment panel owns message, promise, and directions. The right side is an edge-to-edge expressionist painting with a monumental coffee cup and active café background. A small black caption labels the original concept artwork without competing with it.

### Paint Pin

A square Burnt Orange marker with 8px Gallery Black border and large Amber offset. It is rotated -5° and uses oversized Anton A1 above a compact label.

## Do's and Don'ts

### Do:

- **Do** let impasto café artwork carry atmosphere at architectural scale.
- **Do** use black borders and gutters to frame saturated poster fields.
- **Do** keep color blocks large, categorical, and compositionally intentional.
- **Do** pair Anton statements with condensed, readable Barlow copy.
- **Do** preserve the split between immersive art and actionable information.

### Don't:

- **Don't** soften the world into beige café minimalism or sterile gallery white.
- **Don't** crop production artwork so tightly that the café community disappears.
- **Don't** use rounded cards, pill buttons, gradients, glass, or diffuse shadows.
- **Don't** turn every phrase into display type; contrast depends on quieter body copy.
- **Don't** scatter saturated colors as arbitrary badges when they can own a full poster field.
