---
name: A1 Brews
description: A bright local-wayfinding collage for a neighbourhood coffee, art, thrift, and community space.
colors:
  waypoint-blue: "#123ca8"
  waypoint-blue-dark: "#0b2e87"
  milk-paper: "#f6f2e8"
  marker-orange: "#f45114"
  espresso-brown: "#24130e"
  sign-ink: "#101010"
  white: "#ffffff"
  mist-blue: "#e3e8fa"
typography:
  display:
    fontFamily: "Archivo Black, Impact, sans-serif"
    fontSize: "clamp(4.2rem, 8.4vw, 8.2rem)"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo Black, Impact, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Archivo Black, Impact, sans-serif"
    fontSize: "clamp(1.55rem, 2.4vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1
  body:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 900
    letterSpacing: "normal"
rounded:
  circle: "50%"
  map-pin: "50% 50% 50% 0"
spacing:
  control-y: "1rem"
  control-x: "1.3rem"
  section-edge: "clamp(1.25rem, 4vw, 4.5rem)"
  section-block: "clamp(5rem, 10vw, 10rem)"
components:
  button-primary:
    backgroundColor: "{colors.marker-orange}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "{spacing.control-y} {spacing.control-x}"
  button-light:
    backgroundColor: "{colors.milk-paper}"
    textColor: "{colors.waypoint-blue}"
    typography: "{typography.label}"
    padding: "{spacing.control-y} {spacing.control-x}"
  navigation-cta:
    backgroundColor: "{colors.marker-orange}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    padding: "0.7rem 1rem"
  location-chip:
    textColor: "{colors.waypoint-blue}"
    typography: "{typography.label}"
---

# Design System: A1 Brews

## Overview

**Creative North Star: "The Local Wayfinding Collage"**

A1 Brews looks like the brightest landmark on a familiar neighbourhood route. The visual system combines municipal wayfinding, hand-painted shop signage, gallery labels, and layered art materials into a confident identity that makes coffee and creativity feel inseparable.

The world is graphic, warm, and deliberately physical: ultramarine fields behave like destination signs, milk-white surfaces feel like paper, tangerine marks point and invite, and espresso brown adds the weight of coffee and ink. Oversized type, route lines, circular markers, rotated frames, and hard-offset shadows keep the experience lively without weakening its practical purpose of helping visitors find the shop.

**Key Characteristics:**

- High-contrast ultramarine, milk paper, tangerine, and espresso color blocking.
- Condensed sign typography paired with oversized, tightly set display lettering.
- Circular destination markers, route lines, map geometry, and framed art canvases.
- Flat fields with tactile hard-offset shadows instead of soft luxury styling.
- Mobile-first stacking that preserves strong type, bold color, and clear visit actions.

## Colors

The palette reads as neighbourhood signage crossed with art-room materials: decisive blue anchors the route, orange marks action, milk softens the field, and espresso grounds it.

### Primary

- **Waypoint Blue:** The dominant brand field for hero imagery, location sections, map lines, headlines, and the A1 wordmark.
- **Deep Waypoint Blue:** A darker supporting blue reserved for tonal depth where the primary needs a stronger edge.

### Secondary

- **Marker Orange:** The action and annotation color for primary calls to action, section labels, route markers, focus rings, and energetic full-width fields.

### Neutral

- **Milk Paper:** The default page ground, framed-art border, light button surface, and warm contrast against blue and espresso.
- **Espresso Brown:** The coffee-led grounding tone for dark feature fields and hard-offset shadows.
- **Sign Ink:** The default body-copy color on light surfaces.
- **White:** High-contrast action and section text where the warmer milk tone is not used.
- **Mist Blue:** Muted supporting copy on the blue location field.

### Named Rules

**The Destination Blue Rule.** Waypoint Blue owns large fields and major headings; it is a navigational anchor, not a minor decorative accent.

**The Orange Means Energy Rule.** Use Marker Orange for actions, annotations, nodes, and creative interruptions. Its role is to move the eye or prompt movement.

## Typography

**Display Font:** Archivo Black (with Impact and sans-serif fallbacks)  
**Body Font:** Barlow Condensed (with Arial Narrow and sans-serif fallbacks)

**Character:** Archivo Black gives headlines the force of hand-painted exterior signage, while Barlow Condensed keeps practical copy compact, direct, and locally familiar. The pairing is bold without becoming corporate.

### Hierarchy

- **Display** (900, responsive 4.2rem–8.2rem, 0.84 line-height): Hero slogans only; uppercase, tightly tracked, and allowed to dominate the first viewport.
- **Headline** (900, responsive 3rem–6rem, 0.94 line-height): Section statements and visit prompts, uppercase with compact line stacking.
- **Title** (900, responsive 1.55rem–2.25rem, 1 line-height): Route-step titles and smaller emphatic statements.
- **Body** (500, 1.15rem base, approximately 1.5 line-height): Descriptive and practical copy; important introductions scale larger and stay near 49–62 characters per line.
- **Label** (800–900, compact sizes, uppercase): Navigation, chips, section labels, buttons, stamps, and map captions.

### Named Rules

**The Sign First Rule.** Major headings behave like public signs: short, uppercase, tightly tracked, and immediately legible.

**The Condensed Utility Rule.** Supporting copy and controls use the condensed family so practical information stays compact beside the oversized display voice.

## Layout

The desktop system alternates asymmetric two-column stages with full-width color fields. The hero uses an approximately 41/59 split, the art and location sections reverse the visual weight, and content sections rely on generous fluid edge padding and deep vertical spacing. Circular focal objects and rotated canvases deliberately interrupt the grid while copy remains aligned to stable page edges.

At 900px, major two-column sections collapse to one column and the location copy moves ahead of its map. At 680px, the header reduces from 88px to 74px, navigation becomes a stacked disclosure, the three-step horizontal route becomes a vertical timeline, actions stack, and the footer becomes a single column. Fluid `clamp()` values protect the bold type and spacing between breakpoints.

**The Route Before Decoration Rule.** Even when geometry overlaps or rotates, reading order, section entry points, and visit actions stay on a simple vertical route.

## Elevation & Depth

Depth is tactile and structural rather than ambient. Buttons, the coffee medallion, destination stamp, map pin, and art canvases use firm offset shadows in espresso or translucent espresso, making elements feel screen-printed, mounted, or physically layered. Large surfaces otherwise remain flat and are separated by color blocking or crisp borders.

### Shadow Vocabulary

- **Control Offset** (`6px 6px 0 #24130e`): Default button lift; compresses to `3px 3px 0 #24130e` while the control shifts on hover.
- **Object Offset** (`18px 22px 0 rgba(36,19,14,.35)`): Coffee medallion lift on the blue hero field.
- **Canvas Offset** (`18px 22px 0 rgba(36,19,14,.45)`): Stronger gallery-frame layering on the art wall.
- **Marker Offset** (`8px 9px 0 #24130e`): Compact stamp lift; the map pin uses a related translucent 8px by 10px offset.

**The Hard Shadow Rule.** Use offset shadows to imply printed or mounted objects; do not introduce diffuse card shadows or glossy elevation.

## Shapes

The base layout is square-edged and poster-like. Curves are reserved for meaning: circles identify destinations, coffee, route nodes, and the hand-drawn A1 stamp. The map pin uses a rotated teardrop silhouette, while gallery canvases remain rectangular, thickly framed, and slightly rotated. Borders are crisp and typically use Waypoint Blue or Milk Paper at 2–15px depending on scale.

**The Meaningful Circle Rule.** Circular forms mark a destination, a route point, or the coffee focal object; they are not a general-purpose container shape.

## Components

### Buttons

Buttons feel like small printed placards that can be physically pressed.

- **Shape:** Square-edged with no border radius.
- **Primary:** Marker Orange with white uppercase label text, spacious inline gap, 1rem by 1.3rem padding, and a hard espresso offset shadow.
- **Hover / Focus:** Hover shifts the button 3px down and right while compressing its shadow; keyboard focus receives a 3px Marker Orange outline with 4px offset.
- **Light:** Milk Paper with Waypoint Blue text for use on blue fields.
- **Contextual Blue:** The social callout reuses the primary button structure with a Waypoint Blue background on orange.

### Chips

- **Style:** The location chip is an unboxed uppercase blue label preceded by an orange circular marker.
- **State:** Informational only; it behaves as a route annotation, not a selectable filter.

### Cards / Containers

- **Corner Style:** Square for route articles and canvases; circular only for destination objects.
- **Background:** Large flat palette fields instead of generic white cards.
- **Shadow Strategy:** Route articles remain flat; framed canvases and focal markers use the documented hard offsets.
- **Border:** Timeline nodes combine a milk border with a blue outline; canvases use a thick milk frame.
- **Internal Padding:** Fluid section padding and context-specific article padding preserve the editorial composition.

### Navigation

The header is a milk-paper sign strip with a crisp blue lower rule. The A1 mark uses Archivo Black and a slightly rotated circular badge. Desktop links are uppercase, heavy, and unboxed except for the orange Facebook action; ordinary links turn orange on hover. Below 680px, a three-line blue menu control reveals a full-width stacked panel and closes after navigation.

### Destination Stamp

A rotated orange circle combines the A1 display mark with a compact uppercase caption. It is reserved for hero or map moments where the shop is framed as the endpoint of a route.

### Art Canvas

Overlapping rectangular canvases use thick milk frames, hard espresso shadows, bold one-word display labels, rotated placements, and large diagonal paint bands. The composition should feel handmade and communal while preserving strong geometric legibility.

## Do's and Don'ts

### Do:

- **Do** give Waypoint Blue, Milk Paper, Marker Orange, and Espresso Brown large, confident fields.
- **Do** use orange markers and route geometry to lead visitors toward an action or destination.
- **Do** keep major headings short enough to read as signage.
- **Do** reserve physical rotation and hard shadows for focal objects, art frames, and actionable placards.
- **Do** preserve a clear single-column reading route when layouts collapse on mobile.

### Don't:

- **Don't** drift into beige café minimalism, soft neutral lifestyle styling, or generic luxury-coffee cues.
- **Don't** use rounded cards as a default container pattern; curves carry destination meaning here.
- **Don't** replace hard offset shadows with blurred, floating dashboard-card elevation.
- **Don't** use orange as passive filler when it can act as a marker, annotation, or call to action.
- **Don't** let collage geometry obscure factual information, navigation, or visit actions.
