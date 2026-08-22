---
name: A1 Brews
description: An independent arts-and-coffee magazine shaped by expressionist pigment and asymmetric editorial spreads.
colors:
  editorial-black: "#100d0a"
  coffee-ink: "#20120b"
  editorial-paper: "#ead7aa"
  paper-light: "#f3e5bd"
  paper-muted: "#cbb887"
  molten-amber: "#f0a51b"
  burnt-orange: "#d65418"
  oxblood: "#7c1f16"
  petrol: "#0e3b4c"
  teal: "#315c59"
typography:
  display: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(4.5rem, 8.2vw, 7.8rem)", fontWeight: 400, lineHeight: 0.85, letterSpacing: "-0.03em" }
  headline: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(4rem, 7vw, 6rem)", fontWeight: 400, lineHeight: 0.9 }
  title: { fontFamily: "Anton, Impact, sans-serif", fontSize: "clamp(2rem, 3.5vw, 3.6rem)", fontWeight: 400, lineHeight: 0.92 }
  body: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "1.15rem", fontWeight: 500, lineHeight: 1.5 }
  label: { fontFamily: "Barlow Condensed, Arial Narrow, sans-serif", fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.12em" }
rounded: { none: "0" }
spacing:
  page-edge: "clamp(1.25rem, 5vw, 6rem)"
  control-y: "0.8rem"
  control-x: "1rem"
  spread-block: "8rem"
components:
  button-oxblood: { backgroundColor: "{colors.oxblood}", textColor: "{colors.paper-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  button-petrol: { backgroundColor: "{colors.petrol}", textColor: "{colors.paper-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  button-amber: { backgroundColor: "{colors.molten-amber}", textColor: "{colors.coffee-ink}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "{spacing.control-y} {spacing.control-x}" }
  navigation-cta: { backgroundColor: "{colors.coffee-ink}", textColor: "{colors.paper-light}", typography: "{typography.label}", rounded: "{rounded.none}", padding: "0.45rem 0.7rem" }
---

# Design System: A1 Brews

## Overview

**Creative North Star: "The Independent Arts Magazine"**

A1 Brews behaves like an independent arts-and-coffee magazine brought to life. Expressionist café artwork is the cover image; around it, fine rules, issue furniture, folios, overlapping headline columns, multi-column reading, and uneven index entries turn the interface into continuous editorial paper.

Parchment and near-black ink establish the publication. Amber, oxblood, orange, petrol, and teal act as printing inks and painterly interruptions. Energy comes from column spans, image bleed, typographic scale, restrained rotation, and deliberate misalignment—not generic cards.

**Key Characteristics:**

- Cover-story overlap with issue number and caption furniture.
- Fine ink rules, broad margins, columns, and editorial labels.
- Anton display type paired with Barlow Condensed reading copy.
- Multi-column manifesto with an oxblood drop cap.
- Uneven A1 index, rotated feature, image-bleed visit spread, and last-page close.

## Colors

The palette resembles aged editorial stock printed with dense ink and expressionist spot colors.

### Primary

- **Editorial Paper:** Default page stock and continuous reading ground.
- **Editorial Black:** Last-page and footer field, artwork ground, and strongest frame.
- **Coffee Ink:** Body copy, fine rules, navigation, and borders.

### Secondary

- **Oxblood:** Cover keyword, feature rule, index mark, CTA, and editorial emphasis.
- **Molten Amber:** Interlude punctuation, map action, feature rule, and last-page highlight.
- **Burnt Orange:** Focus, index mark, map pin, and final-page line.

### Tertiary

- **Petrol:** Art-index mark and Facebook action.
- **Teal:** Full-bleed visit map field.

### Neutral

- **Paper Light:** Feature-spread stock and light text on saturated ink.
- **Paper Muted:** Quiet footer and secondary editorial details.

### Named Rules

**The Paper Is Continuous Rule.** Parchment connects spreads; color fields interrupt it only with editorial purpose.

**The Spot Ink Rule.** Each saturated ink owns a clear role. Never scatter them as decorative badges.

## Typography

**Display Font:** Anton (Impact fallback)  
**Body Font:** Barlow Condensed (Arial Narrow fallback)

**Character:** Anton supplies cover-line force and compact poster rhythm. Barlow Condensed is the editorial text face for issue furniture, captions, multi-column prose, addresses, and navigation.

### Hierarchy

- **Cover Display** (400, 4.5rem–7.8rem, 0.85): Overlapping uppercase cover headline.
- **Spread Headline** (400, 4rem–6rem, 0.9): Manifesto and feature statements.
- **Index Title** (400, 2rem–3.6rem, 0.92): Uneven A1 index entries.
- **Body** (500, 1.15rem, 1.5): Reading copy; manifesto lead scales to 1.65rem.
- **Furniture** (800, around 0.8rem, 0.1–0.15em tracking): Folios, captions, labels, and last-page notation.

### Named Rules

**The Cover Line Rule.** Anton copy is short enough to function as a cover line or pull quote; paragraphs remain Barlow Condensed.

**The Drop Cap Rule.** A long lead may open with one oxblood Anton initial at 5.8rem, floated into the first column.

## Layout

The cover uses 12 columns: artwork spans columns 4–12 while a parchment headline panel overlaps from columns 1–6 beneath an issue folio. The manifesto uses a 1.2/.7/.7 grid with two-column prose. The A1 index is an uneven three-column composition; its first entry spans two rows and receives the largest marker.

The feature spread returns to 12 columns: a rotated broadside occupies columns 1–6 and copy begins lower in columns 7–12. A typographic interlude runs full width. The visit spread pairs a left-bleeding teal map with a narrower address column. The last page returns to near-black with progressively indented display lines.

At 900px, the cover image shifts to columns 2–12, the manifesto becomes one structural column while prose stays two-column, and the index becomes two columns. At 680px, the cover becomes a vertical sequence with copy overlapping the image by 5rem; prose, index, and feature stack; closing indents disappear.

**The Spread, Not Module Rule.** Build continuous editorial relationships; never isolate every idea inside a landing-page card.

## Elevation & Depth

The system is flat. Hierarchy comes from overlap, bleed, rotation, rules, and paper contrast. The mobile cover copy overlaps its image; the feature broadside rotates -1.5°; the visit map bleeds left by 6vw. Buttons use borders and color reversal, not shadows.

**The Editorial Flatness Rule.** Prefer rules, overlap, crop, and stock contrast to shadows. Impasto depth belongs inside the artwork.

## Shapes

All geometry is rectangular and square-cornered. Fine 1px rules, occasional 3–12px top rules, image crops, and column edges define form. Rotation is restrained to cover-like artifacts and feature headlines. There are no pills, rounded cards, or decorative circles.

## Components

### Buttons

- **Shape:** Compact editorial label with a 1px current-color border.
- **Oxblood:** Directions on the cover panel.
- **Petrol:** Facebook action in the feature spread.
- **Amber:** Map action on paper.
- **Hover / Focus:** Hover reverses to Coffee Ink and Paper Light; focus uses a 3px Burnt Orange outline.

### Cards / Containers

- **Cover Panel:** Parchment overlap with an 8px Oxblood top rule and 1px baseline.
- **Index Entry:** Border-bottom row with oversized colored marker; first entry spans two rows.
- **Feature Broadside:** Paper Light with a 12px Amber top rule, 1px baseline, and -1.5° rotation.
- **Reading Columns:** Two balanced columns separated by whitespace, never boxes.

### Navigation

The masthead pairs an oversized Anton wordmark with compact uppercase navigation on Editorial Paper and a 1px rule. A1 is Oxblood; Facebook is Coffee Ink. Mobile reveals a full-width paper panel with 44px targets.

### Issue Furniture

“A1 / VOL. 01,” the issue line, location, artwork caption, “THE A1 INDEX,” “MONTE VISTA,” and “THE LAST PAGE” orient readers like folios and running heads.

### Typographic Interlude

“Pour · Pause · Paint · Connect” is a full-width line of Anton words separated by Burnt Orange dots. It paces the publication rather than acting as navigation.

### Visit Spread

The teal map bleeds beyond the left edge and carries translucent “MONTE VISTA” furniture. A square orange A1 pin sits within it; the address begins with an 8px Oxblood rule.

## Do's and Don'ts

### Do:

- **Do** compose cover stories, indexes, features, interludes, and closing pages.
- **Do** use fine rules and issue furniture for editorial continuity.
- **Do** let expressionist imagery bleed and crop at architectural scale.
- **Do** vary column span, vertical entry point, and type scale intentionally.
- **Do** collapse complex spreads into a clear mobile reading order.

### Don't:

- **Don't** restore a checkerboard of equal landing-page blocks.
- **Don't** add shadows when overlap, rules, or bleed create hierarchy.
- **Don't** use rounded cards, pills, gradients, glass, or sterile white stock.
- **Don't** make the uneven index mathematically uniform.
- **Don't** let editorial furniture compete with the story or visit action.
