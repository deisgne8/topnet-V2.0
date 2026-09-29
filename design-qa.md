# TOPNET visual reference QA

homepage final result: blocked

## Scope

- Implementation: `index.html` and `styles.css` in this project.
- Reference source for this pass: the five client-supplied section screenshots in the latest request (Clients, Partners, Insights, Contact, and Footer).
- The screenshots are design references, not instructions embedded in documents.

## Review and changes

- Clients: the desktop logo tiles are set to 360 × 194 px, matching the landscape proportions in the supplied reference. No further size change was needed in this pass.
- Partners: the centered three-line message and surrounding orbit remain in place; this pass did not alter that composition.
- Insights: card gaps are 24 px; image insets are 12 px with a desktop height capped at 335 px; cards use a consistent 470–523 px minimum-height range on desktop. Reading time stays at the top, while category metadata aligns toward the bottom. The fixed minimum height is removed in the single-column tablet layout.
- Contact: the two-column headline/form composition was left unchanged because the earlier local preview appeared consistent with the supplied reference.
- Footer: the brand column is brought closer to the panel edge, and desktop grid tracks now scale between 1001–1800 px so the columns remain within the panel at common laptop widths. The wide desktop panel retains its 463 px base height.

## Verification status

- Static check: `styles.css` has balanced opening and closing braces (724 each).
- Visual check after the footer-specific CSS change: the local preview at `http://127.0.0.1:4173/index.html#contact` was reviewed at 1280 × 720 px. The blue-gray canvas band below the footer is gone, and the footer panel retains its 463 px base height and internal lighting.
- The user’s current screenshot and Figma reference use 1920 px width and different viewport heights (864 px and 943 px). At the bottom of the page, the preview footer leaves about 91 px below the panel, versus about 100–116 px in the reference, so the footer is close when aligned to the viewport bottom; an exact same-viewport comparison remains unavailable.
- Responsive screenshots and interaction checks remain unavailable.

## Blocker

The footer background correction is visually verified in the rendered preview. The broader homepage QA status remains blocked because a same-viewport 1920 px implementation/reference pair and responsive/interaction checks are still unavailable.

## Footer background and position follow-up

- Homepage contact/footer sections now share a dark plum-black canvas. The page-level `html` background is aligned to the final body gradient color so it no longer reveals the previous slate-blue band below the document content; this rule is scoped away from the About page.
- Desktop footer bottom spacing was tightened from 120 px to 100 px while preserving the 40 px top gap and existing card height. The rendered preview shows continuous dark background below the panel and a bottom-aligned position close to the supplied reference.
- Footer background: visually verified. Exact Figma position comparison: partial, due to viewport-size mismatch.

## Banner connector alignment follow-up

- The banner’s supplied `assets/Vector.svg` connector paths now use the reference’s orientation: upper paths are vertically mirrored, lower paths use the unflipped route, and left/right counterparts remain mirrored horizontally.
- Middle and lower connector rows were raised to line up with their service tiles in the supplied reference. The SVG reach now extends close to the central artwork, and the cloud/server artwork layers above the connector traces to keep both sides consistent.
- Rendered preview at 1280 × 720 px shows the animated traces following the full curves without the former low-row offset. Exact pixel comparison remains partial because the reference screenshot uses a different viewport/crop; overall homepage QA remains blocked pending a same-viewport comparison.

## About TopNet page review

final result: passed for desktop and mobile visual review

- Scope: `about.html` and About page rules in `styles.css`; `index.html` layout was left unchanged.
- Reference: user-supplied About wireframe at `https://deisgne8.github.io/topnet-wireframe/?page=about`.
- Local preview reviewed at `http://127.0.0.1:8000/about.html` at 1920 × 850 px and 390 × 844 px.
- About section order now follows the wireframe: hero, Who We Are, Our Team, Vision & Mission, Our Values, Company History, Clients & Partners, TopNet Certifications, contact, and footer. The standalone Saudi Presence and Key Strengths sections were removed because they do not appear in the wireframe.
- Visual review covered the hero, story, team cards, values, history, clients/partners, contact form, and footer. At the mobile viewport, section cards stack vertically and the footer fits the narrow screen.
- Follow-up: removed the individual section backdrops and kept one continuous navy gradient behind the About content; the hero now fades into that same base. Desktop and 390 × 844 px previews show no distinct section color bands.
- Values: reviewed the pinned, center-aligned statement and vertically stacked principles at desktop, including the active-value scroll treatment; at mobile, the content becomes a single column with no page-level horizontal overflow.
- Team: applied the supplied tall portrait-card layout with rounded corners and a bottom name/role strip. The heading and card row share responsive side gutters (96 px at 1920 px viewport width and 24 px on mobile) while cards remain horizontally scrollable; keyboard navigation advances the row. The track scrolls internally while the mobile page remains 390 px wide.
- Clients & Partners: the About page now reuses the homepage’s animated client marquee, partner orbit layout, labels, and project partner assets, within the single Clients & Partners section shown in the wireframe. At 390 px, both components stay inside the viewport without page-level horizontal overflow.
- Team content: populated the four names and roles shown in the supplied wireframe. Per user direction, no staff portraits are added; the portrait area uses the existing TopNet mark as a decorative placeholder without a visible pending label.
- Real in-project page and section destinations are used for navigation. Careers, social profiles, and legal pages are displayed as unavailable labels because the project contains no destination URLs.
- Missing approved content remains flagged in the page: team profiles, additional history milestones, and certification details.
- No automated tests were run; the About page was visually reviewed in the in-app browser, and its console had no runtime errors.

## Start a conversation background follow-up

- The Insights-to-Contact transition uses one shared slate canvas, with both sections transparent so there is no horizontal background seam.
- Added the supplied transparent TopNet mark as `assets/contact-logo-background.png` and softened it into a large screen-blended violet/lime light field behind the copy and form; the mark remains ambient rather than appearing as a separate card or foreground image.
- The local preview at 1280 × 720 px was visually checked after adjusting the logo layer’s placement, blur, and intensity. The supplied Figma screenshot is 1920 px wide, so exact same-viewport comparison remains partial; overall homepage QA remains blocked on that viewport mismatch and responsive/interaction checks.

## Rayadah Cloud lighting and connector follow-up

- Preserved the supplied `assets/Vector.svg` connector geometry and corrected the animation direction: curved routes now send their short light pulse from the outer edge toward the blue Saudi Cloud core, while straight middle routes keep the same inward travel.
- Matched the reference palette with muted green-gray base traces, a short cyan/lime animated highlight, lime service nodes, and a restrained blue atmospheric halo behind the core.
- The local preview at 1280 × 720 px was checked with the full Rayadah Cloud network visible. Node positions and line routing follow the supplied 1364/1920 px reference screenshots; exact same-viewport motion capture remains partial.

## Rayadah background light-marker alignment follow-up

- Repositioned the six desktop background light markers to the reference grid columns: 10.4%, 20.8% (top and lower pair), 83.2% (top and lower pair), and 93.7%.
- Changed the marker treatment from cyan drifting streaks to the reference’s pale green, 72 px vertical lights with a restrained breathing animation. Mobile positioning remains on the existing responsive fallback.

## Supplied Figma prototype cross-check

- Reference prototype: `https://www.figma.com/proto/FupwcfEMFy4RUzFqB7fz5z/TOPNET?page-id=0%3A1&node-id=456-2169`
- The Figma design/motion API could not inspect node `456:2169` because the file does not grant edit access. The public prototype was opened and visually checked section-by-section instead.
- Confirmed against the rendered prototype: one continuous slate canvas between sections, the About violet orbit lighting, the Why TopNet card mosaic, the Rayadah grid/core composition, partner orbit placement, insight card treatment, contact logo lighting, and the footer panel/ring background.
- Fixed the remaining shared-canvas seam by restoring the full-page navy/slate/green gradient instead of the flat `#192638` override.
- Fixed Rayadah pulse animation by restoring the SVG dash start offset (`1000 → 0`), keeping the complete base route visible while a thin cyan/lime dash travels along it. Service tiles remain lime; only the central Saudi Cloud visual stays blue.
- Static check after the final pass: `styles.css` has balanced opening and closing braces (1092 each). The local preview was reloaded at `http://127.0.0.1:4173/index.html#rayadah-cloud` and checked through the cloud, insights/contact, and footer areas.

## About visual top-gap follow-up

- Reduced the desktop About section minimum height from 960 px to 884 px so the orbit artwork is not pushed down by an artificial blank band.
- Raised the responsive molecule anchor slightly at desktop reference sizes while preserving the orbit scale, violet center lighting, and float animation.
- Reloaded the local preview and confirmed the About copy and molecule remain visible without clipping at the checked viewport.

## About-to-Why background continuity follow-up

- Removed the hard About section background edge and restored the shared page gradient behind the transition.
- Allowed the orbit artwork to extend beyond the About box so the lower circle can finish naturally instead of being cut at the section boundary.
- Extended the violet/green atmospheric glow through the transition while keeping the Why TopNet cards on the same blended canvas.

## Why TopNet card artwork blending follow-up

- Updated the Reliability card artwork from `lighten` to screen blending and softened its left mask edge so the source PNG's dark square background disappears into the card surface.
- Preserved the artwork brightness and its existing responsive card placement; the local Why TopNet preview was reloaded and checked after the change.

## Performance card stacking follow-up

- Added a dedicated stacking layer to the Performance section so the stat cards stay above the overflowing About orbit artwork.
- The orbit remains visible behind the cards while no longer crossing over their text or surfaces.

## Contact transition blending follow-up

- Extended the Contact ambient light layer above the section boundary and removed its hard local background edge.
- The Insights-to-Contact transition now fades continuously into the shared canvas; the local preview was checked at the Contact anchor after reload.

## Rayadah network coordinate alignment follow-up

- Repositioned the desktop Rayadah network as one coordinate system: the network sits lower and slightly left, while the blue core remains optically centered.
- Re-anchored the curved top and bottom SVG route groups to the supplied reference and kept the straight middle routes aligned with the node centers.
- Restored the mobile core to its centered position after the desktop adjustment; the local Rayadah preview was reloaded and checked.

## Partners center-gradient follow-up

- Increased the centered violet atmospheric glow to match the supplied Figma reference: broader vertical spread, brighter core, and a soft green/slate falloff into the shared canvas.
- Kept the orbit badges and their animation unchanged; this pass only corrects the section lighting and background blend.

## Performance card overlap follow-up

- Isolated the About orbit in a lower stacking context and raised the Performance section above it.
- Added blended opaque surfaces to the stat cards so the extended orbit cannot show through the card row; the arcs now begin below the cards as in the reference.
- Rechecked the local preview after reload at the Performance/About transition.

## Reliability card visual follow-up

- Reworked the wide Reliability tile to use one continuous navy/violet surface matching the supplied second reference.
- Moved the title to the reference top inset, kept the description anchored at the lower left, and softened the artwork mask so its raster background no longer creates a vertical panel.

## Rayadah Cloud proportion follow-up

- Reduced the desktop Saudi Cloud visual from 369 px to 350 px while preserving its optical center, bringing the blue core and outer rings back into the same proportion as the six Figma service cards and connector span.

## Partners-to-Insights background follow-up

- Removed the separate Partners background surface and restored the shared page canvas.
- Extended the violet atmospheric glow and orbit artwork into the Insights transition so the lower rings fade naturally instead of stopping at a horizontal section edge.

## Rayadah SVG route orientation follow-up

- Flipped the supplied Vector.svg geometry vertically for the desktop top and bottom route groups, including their animated paths, so the curves connect toward the service cards and Saudi Cloud core in the correct direction.
- Reversed only the lower-left and lower-right route groups within their existing 93 px bands so the two visible lower curves now face the cards without changing the network coordinates.

## Rayadah Cloud background follow-up

- Matched the supplied Figma background treatment with a continuous slate canvas, softer grid lines, and a wider blue atmospheric field behind and below the Saudi Cloud core.
- Kept the background layer behind the connector network and CTA so it reads as blended lighting rather than a separate section panel.

## Insights/news card follow-up

- Checked the supplied Figma card reference against the existing three-card grid.
- Kept the exact card geometry: equal-height slate panels, 24 px outer radius, 12 px inset media, 16 px image radius, and bottom-anchored category metadata.
- Added a soft violet-to-slate/green atmospheric layer behind the grid so the cards sit on the shared canvas without a separate section rectangle.

## Contact blurred-logo follow-up

- Restored the transparent TopNet logo asset as a visible blurred ambient layer behind the contact form.
- Increased its visibility and reduced the blur so the purple/green logo silhouette reads through the background while remaining blended behind the content.

## Reliability artwork blending follow-up

- Faded the square raster artwork's real left and right edges so its dark source background no longer reads as a separate rectangular panel inside the Reliability card.
- Preserved the wide-card placement, right alignment, and artwork brightness while keeping the image blended into the navy/violet surface.

## Rayadah lower-icon alignment follow-up

- Raised the lower-left and lower-right service icons by 18 px on desktop.
- Raised their matching SVG route bands by the same amount so the line-to-icon connection stays aligned.

## Insights metadata color follow-up

- Split each news-card metadata line into category, separator, and topic spans.
- Matched the reference hierarchy with lime category text and muted gray topic text at the bottom of each card.

## Rayadah upper-icon alignment follow-up

- Raised the upper-left and upper-right service icons by 16 px on desktop.
- Raised their matching SVG route bands by the same amount so the line-to-icon connection stays aligned.

## Rayadah recovery-icon alignment follow-up

- Matched the lower-left and lower-right service icons to the browser-marked reference points on desktop.
- Kept the SVG route geometry unchanged so the icons remain visually above their shared lower route.

## Footer background overlay follow-up

- Added a near-black violet gradient field behind the footer so the surrounding canvas no longer ends on slate.
- Shifted the outer field lower and moved the panel's subtle dark veil toward the lower half, while preserving the reference's violet and green right-side glow.
- Added a dedicated footer backplate below the panel using the same shared body gradient, so the lower transition continues with the exact canvas colors.
- Restored the dark transition and extended the upper canvas gradient through the footer end so the lower strip keeps the same dark color treatment.
- Removed the bright slate layer from the lower strip so it now stays on the same near-black tone as the upper footer canvas.

## Insights hover-state follow-up

- Matched the visible Figma interaction treatment with a restrained 4 px lift, a brighter slate edge, a soft green atmospheric glow, and a subtle image emphasis.
- Applied the same state to `:focus-visible` so keyboard users receive the same visual feedback without changing the card geometry.
- Replaced the hover surface's green slate brighten with the reference's dark navy-violet gradient while keeping the card edge neutral and subtle.

## Banner gradient continuity follow-up

- Extended the banner's violet/slate lighting into the lower portion with a full-height fade, so the image area continues into the same dark gradient instead of ending abruptly.
- Added the Figma-style broad muted green lighting behind the performance heading and banner transition without introducing a separate solid section panel.

## Footer background mark follow-up

- Restored the large translucent footer arcs inside the card surface; their decorative layers now sit above the panel background while footer content remains above them.

## Rayadah Cloud eyebrow follow-up

- Matched the Rayadah Cloud eyebrow pill to the muted slate reference style and removed the blue border, fill, and text treatment.

## Footer blurred-logo follow-up

- Removed the blurred TopNet logo layer from the footer card while preserving the existing dark violet and green background gradients.

## Services eight-card reference pass

final result: passed

- Source visual truth: user-attached service-card screenshot, showing a dark TOPNET card surface with compact upper-left glyphs and lower-right artwork.
- Implementation: `services.html` service directory, rendered in the local in-app browser at `http://127.0.0.1:4173/services.html#service-catalog` and `#security-services`.
- State: desktop service directory, with eight full-width capability cards shown in a clear vertical flow without overlap.
- Typography: existing Manrope/TOPNET hierarchy retained; card index, heading, summary, sub-service, and CTA levels are distinct.
- Layout: wide horizontal cards give the wireframe copy and actions room to breathe; tablet retains the wide-card treatment and mobile becomes a normal one-column flow for reliable reading.
- Color and tokens: existing navy, violet, slate, lime, border, radius, and hover treatments are reused from the project design system.
- Content: all eight wireframe service categories, approved summaries, sub-services, and the existing real Rayadah Cloud destination are retained.
- Interaction: category links and header service navigation remain functional; no accordion behavior remains because the directory is now always visible.
- Responsive check: wide cards remain readable at tablet widths and become a normal one-column flow on mobile; static HTML/CSS/JS checks passed with balanced braces and no missing local references.
- Focused comparison: the card surface, glyph placement, lower-right artwork treatment, and responsive reading space were reviewed against the supplied card-grid reference.

## Services artwork blend follow-up

- Matched the homepage feature-card image treatment: darker feature-card surface, `lighten` compositing, full opacity, and the shared saturation/contrast values.
- Added a tighter radial edge fade for the restored square artwork so the older image canvases dissolve into the service cards while remaining readable in the lower-right.
- Kept the artwork lower-right and readable while giving each full-width card its own uninterrupted surface.

## Contact TopNet page review

final result: passed

- Source visual truth: `https://deisgne8.github.io/topnet-wireframe/?page=contact`.
- Implementation: `Contact.html`, rendered at `http://127.0.0.1:4173/Contact.html` in the Codex in-app browser.
- Viewport/state: desktop browser viewport at 1280 × 720 px; page at the top of the contact route and scrolled through the story, strengths, enquiry, Saudi presence, final CTA, and footer states.
- Source and implementation evidence: the supplied wireframe was opened and reviewed in the browser, then the local implementation was captured at the same desktop viewport. The browser-control surface exposed the capture in-session rather than as a persistent image file.
- Full-view comparison: the contact hero uses the wireframe’s label, headline, and supporting copy with the existing TOPNET typography, navy canvas, violet/lime asset treatment, and shared header. The page then adds the requested approved company story and key-strength sections before the wireframe enquiry content, followed by Saudi presence, final CTA, and footer.
- Focused comparisons: the enquiry form and three contact-route cards were reviewed against the wireframe copy; the Saudi presence block and footer were reviewed for layout, city labels, and missing-asset flags.
- Fidelity surfaces checked: Manrope typography and weights; spacing and section rhythm; navy/violet/lime tokens, borders, and rounded controls; supplied molecule and strength icon assets; wireframe copy and project-approved strength copy.
- Interaction checks: services menu expands/collapses; service-category links remain routed to `services.html`; the area-of-interest selector opens and selects all eight service categories; contact and careers links resolve to real project pages; the form remains a prototype-safe no-submit interaction.
- Content flags: the supplied wireframe’s prototype contact routes remain visible; production support URL, social/legal destinations, and map artwork are explicitly flagged as not supplied. Careers now links to the available `Careers.html` page.
- Responsive implementation: page-scoped rules cover the 1000 px and 700 px breakpoints, stacking the story, strength grid, enquiry routes, presence block, CTA, and footer without changing homepage rules. A separate narrow-browser capture was not available in this run; this remains a follow-up verification gap rather than a reported visual defect.
- No actionable P0/P1/P2 findings remain from the desktop comparison. Remaining P3: capture a dedicated narrow viewport once the browser viewport control is available.

## Contact wireframe scope follow-up

final result: passed

- Reduced `Contact.html` to the supplied wireframe sections only: Contact hero, Enterprise Enquiry with the three contact routes, Saudi presence, and the shared footer.
- Removed the non-wireframe company story, key strengths, final CTA, and implementation-only contact note.
- Matched the Contact banner to the existing About Us banner treatment while retaining the wireframe Contact copy.
- Rechecked the rendered page in the browser: the accessibility tree contains only the wireframe page sections, with the map still clearly marked as a placeholder because no approved map asset was supplied.

## Services artwork follow-up

- Restored the existing approved homepage card artwork for the eight service cards, using the closest available visual match for each category.

## Careers page review

final result: passed

- Source visual truth: `https://deisgne8.github.io/topnet-wireframe/?page=careers`.
- Implementation: `Careers.html`, rendered in the Codex in-app browser at `http://127.0.0.1:4173/Careers.html`.
- Viewport/state: desktop browser viewport at 1280 × 720 px; reviewed at the hero, company story, Saudi presence, strengths, open positions, CTA, and footer states.
- Source and implementation evidence: the supplied wireframe was captured in the browser at the same desktop viewport, then the local Careers page was rendered and reviewed in-session. No persistent screenshot file was available from the browser-control surface.
- Full-view comparison: the Careers hero retains the wireframe’s label, headline, supporting copy, dark TOPNET canvas, Manrope typography, and shared header/footer treatment. The requested company story, Saudi presence, key strengths, and contact CTA are added with existing approved project copy and assets.
- Focused comparisons: the four Why Work cards and two open-position cards were reviewed against the wireframe copy, including the disabled “Opening soon” state and role filters.
- Fidelity surfaces checked: typography, spacing/layout rhythm, navy/violet/lime tokens, supplied molecule/cloud/strength assets, and wireframe copy/content.
- Interaction checks: shared Services menu expands and switches categories; team/location filters update the visible role list and show an empty state; Careers and Contact links resolve to real local pages; the available role routes to the real Contact page because no detailed job page was supplied.
- Responsive implementation: page-scoped rules cover desktop, tablet, and mobile breakpoints, stacking the story/presence layouts and values/strengths/filter grids; a dedicated narrow-browser screenshot was not available from the current browser-control surface.
- Content flags: detailed role descriptions, application destinations, and a recruitment inbox were not supplied in the approved project content and are called out on the page instead of being invented.
- Removed the temporary generated service-card image set from the project.

## Careers wireframe scope follow-up

final result: passed

- Reduced `Careers.html` to the wireframe sections only: Careers hero, Why Work at TopNet, Open Positions, and the shared footer.
- Removed the non-wireframe company story, Saudi presence, key strengths, contact CTA, hero CTA, and extra content note.
- Rechecked the rendered page in the browser: the four Why Work cards and two Open Positions cards remain, and no removed sections are present in the accessibility tree.

## Careers continuous background follow-up

final result: passed

- Removed the visual section break by keeping the Careers hero, Why Work, and Open Positions surfaces transparent over one shared page background.
- Tightened the vertical transition between the Why Work cards and Open Positions so the content reads as one continuous page.
- Verified the result in the browser at the Careers hero and Open Positions states; card borders remain the only section-level framing.

## Careers TopNet card and icon style follow-up

final result: passed

- Source visual truth: the supplied TopNet four-card reference screenshot.
- Matched the Why Work cards to the reference with 16px corners, thin slate borders, restrained navy gradient surfaces, 264px desktop card height, and the existing responsive grid.
- Matched the icon treatment with 52px black circular shells, 24px white approved asset icons, and the reference title/body spacing.
- Verified the rendered card state in the browser at the local Careers route; no new artwork or invented icon assets were introduced.

## Careers dropdown style follow-up

final result: passed

- Source visual truth: the supplied open Team dropdown screenshot.
- Matched the filter labels, 55px field height, dark navy select surface, slate border, lime focus border/glow, and native option colors to the TopNet reference.
- Verified the focused Team dropdown state in the local browser while preserving the existing functional team and location filters.

## Careers footer blend follow-up

final result: passed

- Source visual truth: the supplied blended footer screenshot.
- Changed the Careers page canvas to fade into the shared footer atmosphere instead of ending at a hard slate boundary.
- Preserved the existing footer panel, artwork treatment, newsletter control, legal row, and real local navigation links.
- Verified the footer transition in the local browser at the Careers footer state.

## Careers green icon follow-up

final result: passed

- Restored the approved TopNet green source artwork for the four Why Work icons instead of applying a white inversion.
- Kept the black circular icon shells and card treatment from the supplied reference unchanged.
- Verified the rendered green icon state in the local Careers browser preview.

## Careers TopNet dropdown follow-up

final result: passed

- Replaced the browser-native career filters with accessible custom TopNet dropdowns so the open menu can match the supplied reference consistently.
- Matched the open-state option treatment: light-blue selected row, slate unselected rows, compact 27px row height, and dark field with lime focus styling.
- Verified the Team menu opens, exposes its options in the accessibility tree, closes on selection, and filters the visible role list.

## About molecule orbit follow-up

- Centered the molecule to the orbit system and restored the fourth, innermost orbit ring to match the reference composition.
- Corrected the later desktop artwork override so the active molecule position uses the same center axis as the orbit rings.
- Updated the narrow viewport rule to center the molecule from the viewport midpoint rather than anchoring it from the right edge.

## Section background blend follow-up

- Removed the opaque Why TopNet section fill and replaced it with a soft fading wash so the surrounding page gradient continues through the section without a hard horizontal seam.

## Lower service icon alignment follow-up

- Raised both lower infrastructure service icons to sit on top of their connector lines, matching the upper icon treatment.

## Cloud data-line follow-up

- Shifted the three animated vertical data lines slightly to the right while preserving their lengths, glow, and animation timing.

## Footer logo visibility follow-up

- Raised the footer brand above the decorative background layers and applied the same cream logo treatment as the reference so the TopNet mark remains visible inside the card.

## Rayadah capability card hierarchy follow-up

final result: blocked

- Source visual truth: user-supplied Rayadah Cloud service-card screenshot.
- Updated `Rayadah Cloud.html` so each capability card starts with a full-opacity icon, followed by the title and description.
- Removed the service-card number and moved the `CLOUD CAPABILITY` label into a bottom-aligned footer treatment on every card.
- Preserved the approved Storage Services option chips and the existing shared TOPNET typography, colors, and assets.
- Static checks passed: six capability cards and six footer tags are present; card numbers are absent from the capability-card markup; HTML/CSS brace counts are balanced; `git diff --check` passes; `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey spacing and eyebrow follow-up

final result: blocked

- Set the editorial journey to exact 100px desktop left/right spacing and removed the narrower max-width constraint.
- Rebalanced the ambient journey image to a larger, lower-left position with stronger visibility while retaining its hover-driven image switching.
- Changed the eyebrow from the bracket treatment to the shared rounded TopNet pill style.
- Static checks passed: HTML parsing succeeds, 100px gutter rules are present, the TopNet pill treatment is present, image sizing rules are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey editorial layout follow-up

final result: blocked

- Reworked YOUR CLOUD JOURNEY into a two-column editorial layout inspired by the supplied reference: TopNet-styled section label and heading on the left, lead copy and all four numbered journey titles with descriptions on the right.
- Retained the approved journey artwork as a subtle ambient preview that changes on title hover, click, and keyboard selection.
- Preserved Rayadah dark navy, blue, lime, and light editorial text treatment with responsive stacking for smaller screens.
- Static checks passed: HTML parsing succeeds, four journey titles and four preview images remain wired, JavaScript state updates are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey hover-title follow-up

final result: blocked

- Removed the large step number from each Cloud Journey feature panel.
- Kept all four titles visible in the journey tab strip and made hover change the active image, while retaining click and keyboard selection.
- Static checks passed: HTML parsing succeeds, four journey tabs remain present, hover switching is wired, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah operating model center connector follow-up

final result: blocked

- Corrected the ONE CLOUD OPERATING MODEL grid from four tracks to three tracks so the connector arcs align with all three actual cards, including the center card.
- Preserved the flipped connector treatment, animation, 100px desktop gutters, and responsive two-column/one-column fallbacks.
- Static checks passed: HTML parsing succeeds, three model cards match the three-column grid, connector rules remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey gutter follow-up

final result: blocked

- Set the desktop Cloud Journey section to an exact 100px left and right gutter and removed the narrower centered stage width so the feature card fills the intended content area.
- Preserved the tab controls, feature-card layout, blue image treatment, and responsive tablet/mobile behavior.
- Static checks passed: HTML parsing succeeds, 100px gutter rules are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah estimate header swap follow-up

final result: blocked

- Swapped the ESTIMATED PRICE card header into a horizontal row with the Monthly/Annual toggle on the left and ESTIMATED PRICE on the right, matching the supplied reference.
- Preserved the existing billing controls, output hooks, calculator behavior, and mobile stacked fallback.
- Static checks passed: HTML parsing succeeds, the estimate header is in place, JavaScript billing hooks remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah section title rhythm follow-up

final result: blocked

- Standardized the five Rayadah section headings to balanced two-line desktop breaks and widened the heading rhythm so the model and capabilities CTAs stay at the right edge of their heading rows.
- Disabled forced breaks at mobile widths so headings return to natural responsive wrapping.
- Static checks passed: HTML parsing succeeds, all five title-break markers are present, CTA alignment rules remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah operating model connector flip follow-up

final result: blocked

- Flipped the animated connector arcs vertically above the ONE CLOUD OPERATING MODEL cards while preserving their mirrored left/right arrangement, pulse animation, responsive hiding, and reduced-motion fallback.
- Static checks passed: HTML parsing succeeds, both flipped transforms and the route animation remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah secondary button follow-up

final result: blocked

- Matched the Rayadah hero's Explore the platform CTA to the TopNet secondary-button reference: transparent surface, left-aligned label, thin underline, and lime hover/focus underline.
- Kept the primary CTA and all navigation behavior unchanged.
- Static checks passed: HTML parsing succeeds, the secondary button remains present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey blue image treatment follow-up

final result: blocked

- Applied a consistent Rayadah blue/cyan treatment to all four Cloud Journey visual panels while retaining the approved infrastructure, compliance, accountability, and reliability artwork for each tab.
- Preserved the existing tab interaction, keyboard navigation, panel switching, layout, and responsive behavior.
- Static checks passed: HTML parsing succeeds, all four approved journey assets remain referenced, tab hooks remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah billing toggle placement follow-up

final result: blocked

- Moved the Monthly/Annual billing toggle from the illustrative-estimate header into the top of the ESTIMATED PRICE card, above its label and amount.
- Preserved the existing billing data attributes, JavaScript behavior, keyboard controls, and mobile full-width fallback.
- Static checks passed: HTML parsing succeeds, the toggle has one estimate-card placement, JavaScript hooks remain present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah capabilities heading alignment follow-up

final result: blocked

- Anchored the desktop CTA to the bottom edge of the capabilities heading block while keeping it opposite the title on the right, matching the homepage TopNet section-heading rhythm.
- Preserved the shared button treatment and mobile stacked fallback.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah final footer seam cleanup follow-up

final result: blocked

- Removed the remaining Rayadah body veil and wrapper gradient jump at the contact/footer boundary.
- The Rayadah main wrapper now fades directly into the shared homepage canvas, with the footer panel and backdrop continuing below it.
- Static checks passed: `styles.css` has balanced braces and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah footer seam clipping fix follow-up

final result: blocked

- Removed the Rayadah main wrapper's bottom clipping so the contact atmosphere can fade into the footer exactly like the homepage canvas.
- Kept document-level horizontal overflow containment for the wide Rayadah artwork.
- Static checks passed: `styles.css` has balanced braces and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah homepage-canvas footer fix follow-up

final result: blocked

- Matched the homepage footer method by landing the Rayadah main wrapper on the shared `#192638` lower canvas and letting the contact pseudo-layers supply the ambient lighting.
- Removed the extra Rayadah contact fill that was creating a visible transition before the footer panel.
- Static checks passed: `styles.css` has balanced braces and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah footer surrounding-atmosphere follow-up

final result: blocked

- Matched the supplied homepage footer reference by restoring the shared contact-stage green, slate, and violet atmosphere behind the Rayadah footer panel.
- Kept the homepage footer panel and lower backdrop layers in place so the panel sits inside the same continuous canvas.
- Static checks passed: `styles.css` has balanced braces and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah footer homepage-reference follow-up

final result: blocked

- Compared the supplied footer reference with the homepage footer method and switched Rayadah to the homepage's lighter blended panel and lower backdrop layers.
- Removed the heavier Rayadah-specific panel treatment that made the footer read as a separate surface.
- Static checks passed: `styles.css` has balanced braces and `git diff --check` passes. The existing `index.html` worktree diff was preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah footer background continuity follow-up

final result: blocked

- Applied the About Us footer canvas method to Rayadah: page-level lower veil, blended footer panel, and matching footer backdrop treatment.
- Preserved the existing footer content and Rayadah-specific current-page links.
- Static checks passed: Rayadah HTML tag nesting is valid, `styles.css` braces are balanced, and `git diff --check` passes.
- An existing `index.html` worktree diff was detected during verification and was preserved; this footer update did not edit that file.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah calculator layout cleanup follow-up

final result: blocked

- Refined the calculator's desktop internal rhythm with consistent form row gaps, aligned metadata and billing toggle, top-aligned estimate panel, and cleaner note spacing.
- Preserved the 100px desktop outer gutters, responsive stacking, controls, and approved calculator content.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah FAQ intro alignment follow-up

final result: blocked

- Center-aligned the FAQ pill, heading, and supporting paragraph to match the supplied reference while leaving the accordion rows full-width and interactive.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah conversation and footer alignment follow-up

final result: blocked

- Matched Rayadah's conversation section to the About page's contact rhythm by applying the shared `about-page-contact` structure and desktop/tablet/mobile spacing.
- Kept the Rayadah enquiry note and current-page footer destination while reusing the existing About-compatible footer system and continuous background canvas.
- Static checks passed: `Rayadah Cloud.html` and `styles.css` remain structurally valid, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah continuous background follow-up

final result: blocked

- Removed section-level background fills from the Rayadah hero, trust strip, model, capabilities, calculator, journey, FAQ, and contact wrappers.
- Preserved component card surfaces and ambient lighting so the page remains readable while the base canvas blends continuously between sections.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah FAQ gutter follow-up

final result: blocked

- Source visual truth: user-supplied Rayadah Cloud FAQ screenshot.
- Removed the FAQ list's desktop 1000px max-width so it follows the Rayadah section's 100px left/right desktop gutters.
- Preserved the accordion content, open state, and responsive mobile spacing.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah contact gutter follow-up

final result: blocked

- Source visual truth: user-supplied Rayadah Cloud contact-section screenshot.
- Widened the Rayadah contact wrapper and set the desktop section to a 100px left/right gutter without changing the form grid or mobile behavior.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah calculator gutter follow-up

final result: blocked

- Source visual truth: user-supplied Rayadah Cloud calculator screenshot.
- Removed the calculator's 1250px desktop max-width and set the calculator section to a 100px left/right desktop gutter.
- Preserved the existing tablet and mobile responsive gutters and calculator layout.
- Static checks passed: `styles.css` has balanced braces, `git diff --check` passes, and `index.html` is unchanged.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah operating model card layout follow-up

final result: blocked

- Source visual truth: user-supplied three-column reference screenshot.
- Reworked the `ONE CLOUD OPERATING MODEL` section into three visual-led cards with TOPNET-style dark surfaces, full-opacity approved project graphics, and approved story copy beneath each visual.
- Combined the existing platform enablement and cloud operations copy into the third card so the operating-model content remains complete without adding unapproved facts.
- Static checks passed: three model cards are present, referenced assets exist, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah cloud journey card layout follow-up

final result: blocked

- Source visual truth: user-supplied feature-card and step-navigation screenshot.
- Reworked `YOUR CLOUD JOURNEY` into a TopNet-style active feature panel with a content-matched project graphic, oversized step number, journey title, and approved description, followed by four selectable step cards.
- Added click and keyboard navigation for Assess, Design, Move, and Operate while preserving the approved journey copy and responsive stacking.
- Static checks passed: four journey panels, four keyboard tabs, referenced assets, HTML parsing, balanced CSS, and `git diff --check`. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah journey TopNet styling follow-up

final result: blocked

- Source visual truth: user-supplied journey panel screenshot.
- Unified all four journey states under the same TopNet card treatment, including full-opacity project imagery, restrained panel surfaces, lighter heading typography, and the lime active-step cue.
- Static checks passed: all four panels and controls are present, assets exist, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah trust strip reference styling follow-up

final result: blocked

- Source visual truth: user-supplied four-cell reference strip and current Rayadah trust strip screenshot.
- Reworked the Saudi-presence strip into a full-width four-cell stat-style band with alternating TopNet navy, violet, and slate surfaces, approved line icons, and the existing approved trust statements.
- Omitted large numeric metrics because no approved values were provided in the project copy.
- Static checks passed: four trust cells, four existing asset references, HTML parsing, balanced CSS, and `git diff --check`. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah journey typography follow-up

final result: blocked

- Source visual truth: user-supplied journey text crop.
- Tuned the journey step number, title, and supporting copy to the established TopNet typography hierarchy without changing the approved content or layout behavior.
- Static checks passed: typography overrides are present, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah capability icon-set follow-up

final result: blocked

- Source visual truth: user-supplied rounded-square server icon.
- Standardized all six cloud capability cards on the existing approved `icon-*.jpg` set so every icon has the same green framed background, full opacity, crop, and subtle TopNet card shadow.
- Static checks passed: six icon references exist, capability card markup parses, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah journey card palette follow-up

final result: blocked

- Source visual truth: user-supplied journey card screenshot and TopNet homepage card styling.
- Replaced the over-saturated purple-to-teal journey card wash with a deeper TopNet navy/slate surface, restrained violet/green ambient light, darker image framing, and softer slate step controls.
- Static checks passed: palette overrides are present, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah footer homepage parity follow-up

final result: blocked

- Source visual truth: user-supplied Rayadah footer screenshot and the homepage footer implementation.
- Reused the homepage lower-page veil, footer panel gradient, and footer backdrop treatment; made the Rayadah page canvas fade transparent at the bottom so it can blend into the shared footer atmosphere.
- Static checks passed: footer markup and shared background rules are present, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah section CTA alignment follow-up

final result: blocked

- Moved the operating-model and cloud-capabilities section CTAs to the right of their headings on desktop, with the descriptive copy remaining below the title.
- Restored the stacked CTA layout at mobile widths.
- Static checks passed: CTA selectors and responsive fallback are present, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah services icon treatment follow-up

final result: blocked

- Source visual truth: user-supplied rounded-square cloud icon.
- Standardized all six RAYADAH CLOUD SERVICES card icons with the same green framed surface, lime border, soft glow, 72px sizing, and full-opacity treatment while preserving each service-specific pictogram.
- Static checks passed: six icon references exist, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing `index.html` worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah services SVG icon conversion follow-up

final result: blocked

- Converted all six RAYADAH CLOUD SERVICES card icons from raster references to external SVG assets while preserving the rounded green background, border, glow, and service-specific line symbols.
- Static checks passed: six external SVGs validate as XML, the capability card group has no remaining `.jpg` references, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah services homepage icon-shell follow-up

final result: blocked

- Source visual truth: user-supplied homepage service-icon screenshot.
- Applied the homepage `service-icon` treatment to all six Rayadah service cards: 64px green gradient shell, lime border, glow, pulse animation, hover state, and 30px SVG glyphs.
- Kept the SVG files external and transparent so the shared CSS shell controls their appearance consistently.
- Static checks passed: six SVG glyphs validate, six card icon shells are present, HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah operating model connector animation follow-up

final result: blocked

- Source visual truth: user-supplied routed-line reference screenshot.
- Added animated connector arcs above the ONE CLOUD OPERATING MODEL cards using the approved `banner-connector.svg` path, with a moving blue/lime light pulse and reduced-motion handling.
- Static checks passed: connector asset and animation rules are present, responsive/reduced-motion fallbacks are present, CSS braces are balanced, and `git diff --check` passes. Existing worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah section CTA alignment follow-up

final result: blocked

- Aligned the desktop section CTA with the heading row on the right side, instead of centering it against the combined heading and description block.
- Kept the mobile stacked fallback and existing TopNet spacing, button styling, and responsive behavior.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes. Existing worktree changes were preserved.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Careers Why Work icon-shell follow-up

final result: passed

- Applied the supplied reference treatment to the four Why Work cards: 64px green rounded-square shells, lime border, soft green/violet glow, and white line glyphs.
- Reused the approved existing Why Work icon assets and preserved the card layout, typography, spacing, responsive grid, and homepage.
- Browser verification passed on the local Careers preview; CSS braces are balanced and `git diff --check` passes.

## Careers dropdown open-state follow-up

final result: passed

- Matched the supplied TopNet dropdown reference with the compact blue selected row, gray option rows, dark navy field, and the circular lime focus shell around the open Team arrow.
- Bumped the Careers stylesheet revision so the refreshed dropdown CSS loads without browser-cache drift.
- Browser verification passed on the local Careers preview; CSS braces are balanced and `git diff --check` passes.

## Careers Why Work icon color follow-up

final result: passed

- Tuned the Why Work icon shells to the latest supplied crop: muted TopNet green gradient, lime edge, softer green-only halo, and the same centered white glyph treatment.
- Kept the existing 64px rounded-square geometry, approved icon assets, card layout, responsive behavior, and homepage unchanged.
- Browser verification passed on the local Careers preview; computed icon styles are 64px square shells with 28px glyphs, CSS braces are balanced, and `git diff --check` passes.

## Careers Why Work inner glyph follow-up

final result: passed

- Applied the approved TopNet line-icon treatment, using the reference cloud-outline glyph for Impact and content-specific reliability, people, and compliance glyphs for the remaining cards.
- Preserved distinct card-specific glyphs, the green shells, existing card content, responsive layout, and homepage.
- Browser verification passed on the local Careers preview; `git diff --check` passes and CSS braces remain balanced.

## Careers content-related icon mapping follow-up

final result: passed

- Updated the Why Work cards to use content-related approved assets: cloud infrastructure for Impact, reliability for Growth, people/accountability for Culture, and compliance for Benefits.
- Kept the white line treatment, green icon shells, card copy, responsive layout, and homepage unchanged.
- Browser verification passed on the local Careers preview; `git diff --check` passes and CSS braces remain balanced.

## Careers role CTA follow-up

final result: passed

- Matched the supplied TopNet role CTA with compact bold white text, a lime right arrow, no pill or border, and a subtle hover/focus nudge.
- Kept the existing Contact enquiry link and responsive position-card behavior unchanged.
- Browser verification passed on the local Careers preview; `git diff --check` passes and CSS braces remain balanced.

## Careers TopNet button refresh follow-up

final result: passed

- Made the role CTA use an explicit `careers-role-button` hook and refreshed the Careers stylesheet revision so the supplied TopNet “View role →” treatment loads consistently.
- Verified the real Contact enquiry link remains intact and the rendered CTA matches the reference without extra button chrome.

## Careers card spacing follow-up

final result: passed

- Kept all four cards on the shared first-card green shell treatment with content-specific glyphs, and increased the icon-to-title spacing from 22px to the reference-aligned 26px.
- Browser verification confirmed a 26px rendered gap for the cards; `git diff --check` passes and CSS braces remain balanced.

## Homepage connector start and cloud-line follow-up

final result: passed

- Matched the prototype’s connector starts to the section edges while preserving the existing cloud-side endpoints.
- Reversed the left curved SVG pulse travel so curved pulses enter the cloud from the outer service side; straight middle routes remain inward-facing.
- Repositioned the three animated center-cloud lines into the tighter center-right cluster shown in the supplied reference.
- Browser verification passed on the local homepage preview; CSS braces remain balanced and `git diff --check` passes.

## Careers 100px gutter follow-up

final result: passed

- Set the Careers hero, Why Work, and Open Positions sections to the shared 100px desktop left/right gutter, with a 24px responsive fallback below 1000px.
- Browser verification confirmed the section alignment at desktop width; `git diff --check` passes and CSS braces remain balanced.

## Careers unified icon follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_1ZDcwr/Screenshot 2026-09-23 at 12.54.57 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?spacing-check=1#careers-values-title`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Updated all four Why Work cards to use the same approved `assets/banner-cloud-glyph.png` cloud icon inside the existing green TopNet icon shell.
- Focused comparison confirms consistent icon asset, scale, centering, shell color, border, glow, and card spacing across Impact, Growth, Culture, and Benefits.
- Browser DOM verification confirmed all four rendered icon sources resolve to `banner-cloud-glyph.png`; `git diff --check` passes and CSS braces remain balanced.

## Careers content-related icons follow-up

final result: passed

- Updated the four Why Work cards to use distinct approved content-related assets: cloud infrastructure for Impact, reliability for Growth, people/accountability for Culture, and compliance for Benefits.
- Preserved the shared green TopNet icon shell, white glyph treatment, card spacing, responsive layout, and existing card copy.
- Browser DOM verification confirmed the intended mapping on all four cards; `git diff --check` passes and CSS braces remain balanced.

## Careers role pill button follow-up

final result: passed

- Source visuals: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_X5LjSz/Screenshot 2026-09-23 at 2.01.36 PM.png` and `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_OuMFaI/Screenshot 2026-09-23 at 2.02.01 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?role-button-check=1#open-positions`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Changed “View role →” from a text-only CTA to the supplied outlined TopNet pill style: 58px height, 999px radius, subtle border/background, bold label, and lime arrow.
- Preserved the existing `Contact.html#enquiry` destination; browser verification confirmed the rendered button dimensions and styling, `git diff --check` passes, and CSS braces remain balanced.

## Careers unified card icon follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_nvVfC5/Screenshot 2026-09-23 at 3.51.32 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?icon-check=1#careers-values-title`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Updated Impact, Growth, Culture, and Benefits to use the same `assets/banner-cloud-glyph.png` icon shown in the reference.
- Focused comparison confirms the shared cloud glyph stays centered in the existing green shell with consistent scale, glow, spacing, and card layout.
- Browser DOM verification confirmed all four icon sources resolve to the same asset; `git diff --check` passes and CSS braces remain balanced.

## Careers card copy offset follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_rIlEPG/Screenshot 2026-09-23 at 3.57.41 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?copy-spacing-check=1#careers-values-title`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Moved each card title and its paragraph down by increasing the icon-to-title gap to 40px; the title-to-paragraph gap remains 16px.
- Browser verification confirmed the same 40px offset across all four cards, with no card overflow or grid changes; `git diff --check` passes and CSS braces remain balanced.

## Careers horizontal gutter follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_65ZGiZ/Screenshot 2026-09-23 at 4.24.00 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?copy-spacing-check=1#careers-values-title`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Set the Careers intro, Why Work, and Open Positions sections to full width with exactly 100px left and right gutters on desktop; responsive 24px horizontal gutters remain below 1000px.
- Browser verification confirmed the section content and card grid resolve to 100px on both sides; `git diff --check` passes and CSS braces remain balanced.

## Careers role pill arrow removal follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_KeH4pp/Screenshot 2026-09-23 at 4.32.42 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?role-arrow-check=1#open-positions`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Removed the arrow from the “View role” pill while preserving the outlined TopNet button treatment and `Contact.html#enquiry` destination.
- Browser verification confirmed the button has no arrow element, retains the 999px radius and 58px height, and `git diff --check` passes with balanced CSS braces.

## Careers TopNet eyebrow follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_cDFOcI/Screenshot 2026-09-24 at 1.47.29 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?eyebrow-check=1#careers-values-title`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Applied the TopNet eyebrow treatment to the Careers labels: uppercase lime text, 11px weight 800, 2.2px tracking, transparent background, no border, no radius, and no padding.
- Browser verification confirmed Careers at TopNet, Why work at TopNet, and Open positions all use the same eyebrow treatment; `git diff --check` passes and CSS braces remain balanced.

## Careers Open positions eyebrow follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_62ySgp/Screenshot 2026-09-24 at 1.47.50 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?open-positions-eyebrow-check=1#open-positions`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Applied the TopNet eyebrow style specifically to “Open positions”: uppercase lime text, 11px weight 800, 2.2px tracking, transparent background, no border, no radius, and no padding.
- Browser verification confirmed the rendered label matches the supplied treatment; `git diff --check` passes and CSS braces remain balanced.

## Careers eyebrow pill follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_JJo5YA/Screenshot 2026-09-24 at 3.54.19 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?eyebrow-pill-check=1#open-positions`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Changed all Careers eyebrow labels to the supplied TopNet pill style: 34px height, 999px radius, subtle border, translucent dark fill, muted light text, and 20px horizontal padding.
- Browser verification confirmed Careers at TopNet, Why work at TopNet, and Open positions use the same pill treatment; `git diff --check` passes and CSS braces remain balanced.

## Careers footer Connect icon follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_VJsEtc/Screenshot 2026-09-24 at 3.56.41 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?footer-icons-check=1#open-positions`, reviewed in the in-app browser at 1292 × 882 CSS pixels, device pixel ratio 1.
- Updated the Careers footer Connect row to match the reference: plain inline LinkedIn and X marks plus the compact white YouTube play capsule, with no circular icon containers.
- Existing unavailable social destinations remain represented as labeled non-linking spans; browser verification confirmed the rendered row, `git diff --check` passes, and CSS braces remain balanced.

## Rayadah Cloud Journey background line follow-up

final result: blocked

- Added the approved `assets/banner-connector.svg` as a low-contrast multi-line background pattern behind YOUR CLOUD JOURNEY, tinted to the Rayadah lime/green palette.
- Kept the editorial heading, journey list, interactive preview images, 100px desktop gutters, and responsive behavior intact.
- Static checks passed: HTML parsing succeeds, the connector background and journey structure are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah hero secondary CTA follow-up

final result: blocked

- Applied the TopNet secondary-button treatment to Explore the platform: transparent surface, left-aligned label, thin bottom rule, and lime hover/focus rule.
- Updated the CTA target from the missing `#platform` anchor to the existing `#capabilities` section.
- Static checks passed: HTML parsing succeeds, the CTA style and target are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah Cloud Journey image alignment follow-up

final result: blocked

- Moved the interactive journey preview image to the left edge of the heading column beneath the YOUR CLOUD JOURNEY title, matching the supplied reference alignment.
- Preserved the right-hand lead/list column and restored the responsive positioning override for narrower screens.
- Static checks passed: HTML parsing succeeds, the journey preview positioning is present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## Rayadah hero rounded secondary CTA follow-up

final result: blocked

- Restyled Explore the platform to match the supplied TopNet secondary button: centered label, compact rounded outline, transparent navy surface, and lime hover/focus border.
- Preserved the existing `#capabilities` destination and mobile width behavior.
- Static checks passed: HTML parsing succeeds, the rounded secondary CTA styles are present, CSS braces are balanced, and `git diff --check` passes.
- Final rendered screenshot comparison remains unavailable because the local `file://` page could not be refreshed through the browser tool's URL policy.

## One Cloud Operating Model connector animation follow-up

final result: blocked

- Checked the Qarin Features reference: the cards use thin rounded connector arches with a persistent pale trace and a short blue dash traveling along the path.
- Updated the Rayadah operating-model connector layer to use the approved `assets/banner-connector.svg` mask, tighter 54px-above-card geometry, a static trace, and staggered 4.8s blue highlight pulses.
- Preserved the desktop-only behavior and reduced-motion fallback.
- Static checks passed: HTML parsing succeeds, the connector animation and approved mask asset are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## One Cloud Operating Model CTA alignment follow-up

final result: blocked

- Widened the operating-model section header to the full section width so Plan a cloud workshop anchors to the far right desktop gutter opposite the title and copy.
- Kept the capabilities header constrained to its existing 1160px composition and preserved the mobile stacked layout.
- Static checks passed: HTML parsing succeeds, the CTA alignment rules are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah capabilities CTA alignment follow-up

final result: blocked

- Widened the capabilities section header so Build a cloud roadmap anchors to the far right desktop gutter opposite the title and copy.
- Preserved the mobile stacked layout and the shared CTA alignment behavior.
- Static checks passed: HTML parsing succeeds, the capabilities CTA alignment rules are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah estimate CTA text alignment follow-up

final result: blocked

- Corrected Submit this configuration so the label stays right-aligned immediately before the fixed right-side arrow, matching the supplied reference.
- Prevented the label from wrapping or competing with the arrow at narrower widths.
- Static checks passed: HTML parsing succeeds, the estimate CTA alignment rules are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah estimate header order follow-up

final result: blocked

- Moved ESTIMATED PRICE before the Monthly/Annual billing toggle in the estimate header.
- Preserved the existing flex spacing and mobile stacked behavior.
- Static checks passed: HTML parsing succeeds, the estimate-header order is correct, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah illustrative estimate accent follow-up

final result: blocked

- Changed ILLUSTRATIVE ESTIMATE to the shared TopNet lime accent while preserving its uppercase typography and spacing.
- Static checks passed: HTML parsing succeeds, the estimate accent color is present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah Cloud Journey two-line title follow-up

final result: blocked

- Changed the journey title break so it renders as two lines: “A clear path from” and “decision to operation.”
- Widened the desktop heading measure to keep the second line together while preserving the responsive mobile sizing.
- Static checks passed: HTML parsing succeeds, the two-line title structure is present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah Cloud Journey paragraph style follow-up

final result: blocked

- Matched the journey lead paragraph to the shared TopNet body-copy treatment: 15px desktop size, muted gray color, regular weight, and 1.65 line-height.
- Added a 14px mobile size to preserve the same hierarchy on narrow screens.
- Static checks passed: HTML parsing succeeds, the TopNet paragraph styles are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah Cloud Journey background line removal follow-up

final result: blocked

- Removed the decorative routed-line background layer from YOUR CLOUD JOURNEY while keeping the dark canvas and soft ambient glow.
- Preserved the separate operating-model connector animation above the cards.
- Static checks passed: HTML parsing succeeds, the journey line layer is removed, model connectors remain present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah Cloud operating-model image color follow-up

final result: blocked

- Shifted the three operating-model card images toward a cooler blue Rayadah palette with preserved green highlights and glow.
- Applied the treatment only to the card imagery so surrounding layout, copy, and connector animation remain unchanged.
- Static checks passed: HTML parsing succeeds, the blue image filter is present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Internet Connectivity page review

final result: passed

### Source visual truth

- Wireframe: `https://deisgne8.github.io/topnet-wireframe/?page=services/internet-connectivity`
- Source capture: Chrome browser capture at 1918 × 792 CSS px, device density 1, desktop hero and lower-section states reviewed.

### Implementation evidence

- Implementation: `http://127.0.0.1:4173/Internet%20Connectivity.html`
- Browser-rendered capture: Chrome tab `1595205806` at 1918 × 792 CSS px, device density 1. The browser capture was reviewed directly; the CUA browser surface does not expose a standalone screenshot file path.
- Primary interactions tested: FAQ accordion, enquiry service selector, sticky section navigation targets, and services menu hover/open state.
- Console errors: no runtime error surfaced during browser rendering or interaction checks.

### Comparison

- Full view: hero composition follows the wireframe hierarchy while carrying the existing TOPNET dark navy, lime, purple, typography, button, header, and footer system from `index.html`.
- Focused regions: hero service model, outcomes cards, capability grid, delivery steps, FAQ accordion, related services, enquiry form, and footer were visually reviewed at the same desktop viewport.
- Typography, spacing, color tokens, existing assets, and wireframe copy were checked. The service model uses accessible HTML/CSS geometry because no approved raster asset for that diagram exists in the project.

### Findings

- No actionable P0, P1, or P2 differences were found for the requested desktop implementation.
- The two collapsed FAQ answers were not supplied by the wireframe copy, so the page exposes a transparent “Answer not supplied in the approved wireframe copy.” state instead of inventing facts.
- Related Data Connectivity, SD-WAN Connectivity, and VPN Connectivity detail pages are not present in the project; their links return to the existing Connectivity Services directory.

### Responsive and implementation checklist

- New standalone `Internet Connectivity.html` page uses `styles.css` and `script.js`.
- Existing homepage layout remains outside the new page-scoped styles.
- Responsive CSS covers the 1000px, 700px, and 600px breakpoints, including stacked hero, cards, facts, delivery steps, FAQ, CTA, and footer behavior.
- `services.html` now links its Internet Connectivity capability to the new page.
- Static HTML parsing and `git diff --check` pass.

## Internet Connectivity About-style banner refinement

final result: passed

- Matched the page hero to the existing About Us banner treatment with the contained `assets/about-banner-mark.png` layer and shared dark canvas.
- Center-aligned the breadcrumb, eyebrow, title, lead copy, and primary/secondary actions.
- Removed the asymmetric service-model artwork from the banner so the hero reads as a centered inner-page banner; the wireframe content sections below remain unchanged.
- Verified the updated local preview at `http://127.0.0.1:4173/Internet%20Connectivity.html` in Chrome at 1918 × 792 CSS px.
- Static HTML parsing and `git diff --check` pass.

## Rayadah Cloud Services TopNet card styling follow-up

final result: blocked

- Refined the RAYADAH CLOUD SERVICES cards with the shared TOPNET layered slate, violet, and green surface treatment, restrained borders, top-edge highlights, tighter typography, and the existing lime icon shells.
- Preserved the six-card content, approved SVG icon assets, responsive grid, and existing CTA alignment.
- Static checks passed: HTML parsing succeeds, capability card styles are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah estimate billing-toggle alignment

final result: blocked

- Pinned the Monthly/Annual billing toggle to the far right edge of the estimate header on wider layouts.
- Preserved the stacked full-width control treatment on mobile layouts.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah estimate CTA text alignment

final result: blocked

- Centered the “Submit this configuration” label within the CTA while keeping the arrow anchored at the far right.
- Preserved the full-width button, TopNet pill treatment, and responsive behavior.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah journey title alignment

final result: blocked

- Aligned the YOUR CLOUD JOURNEY title with the top of the opposite lead paragraph on desktop.
- Kept the eyebrow pill visible as a supporting label below the title and preserved the responsive mobile flow.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah operating-model card reference styling

final result: blocked

- Reframed the three ONE CLOUD OPERATING MODEL cards as thin-bordered black editorial panels with square inset artwork, large lightweight titles, and quieter supporting copy.
- Preserved the operating-model content, responsive breakpoints, blue Rayadah artwork treatment, and existing animated connector line above the cards.
- Static checks passed: HTML parsing succeeds, model-card reference styles are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah operating-model layout-preserving color correction

final result: blocked

- Restored the existing ONE CLOUD OPERATING MODEL layout and limited the refinement to TopNet slate/violet card surfaces, borders, ambient color, and hover treatment.
- Preserved the current image proportions, card spacing, typography, responsive behavior, and connector animation.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah banner trust-stripe placement

final result: blocked

- Kept the trust stripe immediately after the Rayadah banner and explicitly set it to full page width with no layout gap or inherited content gutter.
- Preserved the existing four-panel stripe content, colors, icons, and responsive stacking behavior.
- Static checks passed: HTML parsing succeeds, the hero-to-stripe selector is present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Reverted operating-model card styling

final result: blocked

- Reverted the additional ONE CLOUD OPERATING MODEL card color, border, ambient glow, and hover-style override requested in the prior iteration.
- Left the original operating-model layout and existing page structure intact.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah stylesheet cache refresh

final result: blocked

- Bumped the Rayadah stylesheet query revision so the browser requests the current `styles.css` instead of reusing the cached v1 stylesheet.
- Static checks passed: HTML parsing succeeds, the stylesheet revision is updated, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah operating-model copy inside cards

final result: blocked

- Moved the operating-model titles and descriptions inside the same bordered card surface as their artwork.
- Preserved the three-column desktop layout, image proportions, connector animation, and responsive stacking.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah capability icon alignment

final result: blocked

- Explicitly left-aligned the capability card copy and centered each SVG glyph inside its green icon rectangle.
- Preserved the card grid, icon tile size, animation, and responsive behavior.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah journey eyebrow order

final result: blocked

- Restored the journey heading order so the eyebrow appears first and the title follows beneath it on desktop.
- Preserved the right-side paragraph, journey image, step list, and responsive behavior.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah operating-model connector visibility

final result: blocked

- Lowered the masked connector path into the gap above the cards, strengthened the animated blue pulse, added a restrained glow, and shortened the animation cycle for clearer motion.
- Bumped the Rayadah stylesheet revision to v3 so the browser requests the updated connector CSS.
- Static checks passed: HTML parsing succeeds, connector animation rules are present, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah operating-model artwork replacement

final result: blocked

- Added the supplied `assets/card-rayadah-cloud.png` artwork and applied it to all three ONE CLOUD OPERATING MODEL image slots.
- Preserved the existing card copy, layout, connector animation, and journey-specific image states; the new artwork is shown without the previous blue hue filter and uses contain positioning.
- Static checks passed: HTML parsing succeeds, the new asset references resolve in the page source, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah journey right-column alignment

final result: blocked

- Moved the desktop journey right column down so the lead paragraph aligns opposite the main title.
- Preserved the journey list, image placement, and mobile stacked layout.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah journey move-image replacement

final result: blocked

- Replaced the Move state image in YOUR CLOUD JOURNEY with the supplied `card-rayadah-cloud.png` artwork.
- Kept the other journey images and interactions unchanged; the replacement uses contain positioning and its original color treatment.
- Static checks passed: HTML parsing succeeds, the Move image reference resolves, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah journey assess-image replacement

final result: blocked

- Replaced the currently visible Assess image in YOUR CLOUD JOURNEY with the supplied `card-rayadah-cloud.png` artwork.
- Preserved the paragraph-to-title alignment, other journey states, and image interaction behavior; Assess and Move use contain positioning for the supplied portrait artwork.
- Static checks passed: HTML parsing succeeds, the Assess image reference resolves, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah capability icon left alignment

final result: blocked

- Moved the green capability icon tiles to the left edge of each card while keeping their SVG glyphs centered inside the tiles.
- Preserved the card text alignment, icon sizing, animation, and responsive behavior.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Rayadah capability glyph centering

final result: blocked

- Locked each SVG glyph to the horizontal and vertical center of its green icon tile.
- Preserved the left-aligned tile position and all existing card spacing and animation.
- Static checks passed: HTML parsing succeeds, CSS braces are balanced, and `git diff --check` passes.
- Rendered local preview refresh remains unavailable because the browser URL policy blocks the local `file://` page.

## Internet Connectivity Outcomes molecule composition

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/codex-clipboard-1c14a7e2-d14e-4f41-b681-f1b0ec41d273.png`.
- Implementation: `http://127.0.0.1:4173/Internet%20Connectivity.html#outcomes`, reviewed in Chrome at 1918 × 792 CSS px, device density 1.
- Kept the approved wireframe “WHAT THIS SERVICE ENABLES” copy on the left and placed the existing `assets/about-molecule.png` asset with orbit rings on the right.
- Positioned the three approved outcome cards around the visual on desktop and stacked them safely below the visual on small screens.
- Checked typography, spacing/layout rhythm, colors, asset fidelity, copy, HTML parsing, and `git diff --check`; no actionable P0/P1/P2 differences remain.

## Internet Connectivity Outcomes four-line heading refinement

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_Crv809/Screenshot 2026-09-23 at 2.52.55 PM.png`.
- Implementation: `http://127.0.0.1:4173/Internet%20Connectivity.html#outcomes`, reviewed in Chrome at 1918 × 792 CSS px, device density 1.
- Widened the desktop Outcomes copy column and tightened only the heading scale so the approved title resolves to four lines while preserving the molecule/card composition.
- Mobile layout remains stacked and responsive; HTML parsing and `git diff --check` pass.

## Internet Connectivity Outcomes TOPNET eyebrow refinement

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_bHKMn2/Screenshot 2026-09-23 at 2.53.10 PM.png`.
- Applied the shared TOPNET green uppercase eyebrow treatment to “WHAT THIS SERVICE ENABLES” without changing the approved copy or section layout.
- HTML parsing and `git diff --check` pass.

## Internet Connectivity right-edge crop fix

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_n7VdCA/Screenshot 2026-09-23 at 2.58.08 PM.png`.
- Added a page-scoped responsive footer grid for intermediate desktop/tablet widths so the shared fixed-width footer no longer overflows and gets clipped at the right edge.
- Preserved the existing footer visual style, content, links, and the mobile breakpoints used by the rest of the site.
- Refreshed the local preview and confirmed the Internet Connectivity page loads with its approved sections; `git diff --check` passes.

## Internet Connectivity rotating background orbit

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_uFH64R/Screenshot 2026-09-23 at 2.58.45 PM.png`.
- Restored homepage-style orbit motion behind the Outcomes molecule with the same 42-second linear rotation rhythm.
- Preserved the centered orbit position by animating the existing translate and rotate transforms together; the molecule and outcome cards remain static.
- Verified in the refreshed local preview at 1917 × 847 CSS px, device density 1; computed animation is running and `git diff --check` passes.

## Internet Connectivity delivery-scope icon tiles

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_5kBiJV/Screenshot 2026-09-23 at 2.59.34 PM.png`.
- Replaced the delivery-scope numbered circles with the existing project glyph assets in the shared TOPNET green rounded-rectangle tile style.
- Preserved the wireframe section, approved capability copy, card grid, responsive behavior, and hover/pulse treatment.
- Verified the refreshed local preview at 1917 × 847 CSS px, device density 1; `git diff --check` passes.

## Internet Connectivity delivery-scope copy alignment

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_bhldXv/Screenshot 2026-09-23 at 3.22.24 PM.png`.
- Kept the green icon tiles at the top of each card and moved the title/paragraph group down by using the card’s available vertical space.
- Aligned the descriptions along a common lower baseline while preserving responsive stacking and the approved copy.
- Verified the refreshed local preview at 1917 × 847 CSS px, device density 1; `git diff --check` passes.

## Internet Connectivity FAQ reference layout

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_N2jadm/Screenshot 2026-09-23 at 3.35.23 PM.png`.
- Reworked only the FAQ presentation: full-bleed section, centered pill eyebrow, centered title/copy, and full-width ruled accordion rows.
- Preserved the Internet Connectivity wireframe copy, existing FAQ items, CTA, and accordion behavior; the second question was opened successfully in the refreshed preview.
- Verified at 1917 × 791 CSS px, device density 1; focused FAQ comparison reviewed and `git diff --check` passes.

## Internet Connectivity FAQS badge alignment

final result: passed

- Reused the exact shared `.pill` treatment and `FAQS` label used by the Rayadah Cloud page.
- Kept the full-bleed FAQ layout, Internet Connectivity heading/copy, and accordion rows unchanged.
- Verified the rendered badge dimensions and styling in the local preview; `git diff --check` passes.

## Rayadah journey supplied-image visibility

final result: blocked

- Scaled the supplied portrait cloud artwork inside the Assess/Move journey preview and increased preview visibility so the artwork reads clearly without changing the journey layout.
- Bumped the stylesheet cache key to v4 so the local browser requests the updated styling.
- Static checks passed: HTML parsing, supplied-image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Rayadah journey supplied-image opacity and scale

final result: blocked

- Set the supplied PNG preview to full opacity, removed the preview fade mask, and increased its scale so the cloud/server artwork is clearly visible at journey-section size.
- Static checks passed: HTML parsing, supplied-image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Rayadah journey supplied-image outer-background cleanup

final result: blocked

- Applied screen blending and a radial image mask to fade the supplied PNG’s square outer background while preserving the cloud/server artwork, glow, and full-opacity treatment.
- Static checks passed: HTML parsing, supplied-image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Rayadah journey supplied-image full-frame display

final result: blocked

- Removed the enlargement transform and preview clipping so the supplied PNG displays fully inside its contained frame without cutting off the cloud/server artwork.
- Static checks passed: HTML parsing, supplied-image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Rayadah journey supplied-image size increase

final result: blocked

- Increased the desktop and mobile preview frame sizes while retaining `object-fit: contain` and visible overflow, so the full PNG remains uncropped at a larger scale.
- Static checks passed: HTML parsing, supplied-image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Explore the platform button cleanup

final result: blocked

- Removed the downward arrow from the Explore the platform button while preserving the existing button style and link target.
- Static checks passed: HTML parsing and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Operating-model connector full-width continuity

final result: blocked

- Extended and overlapped the two animated connector halves so the routed line reaches both section edges and remains continuous across the full card row.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Cloud capability card copy spacing

final result: blocked

- Moved the capability card title and its description lower by restoring vertical space between the icon tile and title group; card heights, icon alignment, and bottom labels remain unchanged.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Operating-model connector visibility recovery

final result: blocked

- Raised the animated connector layer above the grid stacking context, kept cards above the line, and explicitly allowed the section/grid overflow so the routed animation remains visible across the full card row.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Cloud capability tag spacing

final result: blocked

- Standardized the storage-card pill spacing and vertical alignment so the tags sit evenly before the divider and bottom capability label.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Operating-model connector removal

final result: blocked

- Removed the routed decorative lines above the operating-model cards while preserving the card layout and spacing.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY image position

final result: blocked

- Moved the journey preview image to the top of the editorial section while preserving the title, paragraph, phase list, and responsive layout.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY image blending

final result: blocked

- Softened the supplied journey image with reduced opacity and restrained color/brightness while retaining screen blending, so it integrates into the section background without a hard visual edge.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY image lower placement

final result: blocked

- Moved the journey preview image down beneath the title area on desktop and reset its top offset for the responsive mobile flow.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY image after-title placement

final result: blocked

- Moved the desktop journey image farther down so it begins after the headline instead of overlapping the title.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY responsive image separation

final result: blocked

- Increased the responsive preview’s top spacing so the image begins after the complete headline rather than sitting behind the title at tablet/mobile widths.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY responsive image lower offset

final result: blocked

- Increased the responsive image offset again so the complete artwork starts below the title with clear separation.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Journey image layout cache refresh

final result: blocked

- Bumped the stylesheet cache key to v5 so the browser loads the latest journey image position instead of retaining the previous overlapping layout.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY structural image order

final result: blocked

- Changed the journey preview from absolute positioning to normal flow after the headline, ensuring the image appears below the title at desktop and responsive widths without overlap.
- Bumped the stylesheet cache key to v6.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY softer image blend

final result: blocked

- Reduced the journey artwork’s opacity, saturation, and brightness to blend more quietly into the page background.
- Bumped the stylesheet cache key to v7.
- Static checks passed: HTML parsing, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## YOUR CLOUD JOURNEY hover image consistency

final result: blocked

- Updated the Design and Operate hover states to use the same first cloud image as Assess and Move, with shared contained-image styling for every journey state.
- Bumped the stylesheet cache key to v8.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Internet Connectivity Delivery Model industries strip removal

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_FhGFAm/Screenshot 2026-09-23 at 5.01.09 PM.png`.
- Removed the Delivery Model “Designed for complex environments” strip, including its divider, label, and industry chips.
- Verified the focused render at 1292 × 882 CSS px, device density 1; the delivery steps remain intact and `git diff --check` passes.

## YOUR CLOUD JOURNEY image opacity

final result: blocked

- Increased the shared journey image opacity from .42 to .72 so the cloud/server artwork reads clearly while retaining its blended screen treatment.
- Bumped the stylesheet cache key to v9.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.

## Internet Connectivity continuous page background

final result: passed

- Applied one shared atmospheric gradient to the Internet Connectivity page canvas and removed hard section-level background bands from the content sections.
- Preserved distinct card surfaces, the service-facts strip, and footer treatment so hierarchy remains clear while the page reads as one continuous visual field.
- Verified the refreshed local preview at 1917 × 847 CSS px, device density 1; computed section backgrounds are transparent and `git diff --check` passes.

## Internet Connectivity CTA treatment

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_gpEU0i/Screenshot 2026-09-23 at 4.09.16 PM.png` and `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_mDbZUC/Screenshot 2026-09-23 at 4.10.17 PM.png`.
- Kept the hero secondary CTA as a rounded secondary button and removed the downward arrow per the latest reference; preserved the FAQ’s underlined `Ask a service specialist →` treatment.
- Compared the focused hero CTA region in the refreshed local preview at 1292 × 892 CSS px, device density 1. The button reads `Explore capabilities` without an arrow, remains 58px high with a 999px radius, and the CTA navigates to `#capabilities`.
- Console check found only the existing Tailwind CDN production warning; no new page errors. `git diff --check` passes.

## Internet Connectivity FAQ secondary button

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_mkD2TR/Screenshot 2026-09-23 at 4.17.37 PM.png` and `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_JlI8Fh/Screenshot 2026-09-23 at 4.18.02 PM.png`.
- Converted the FAQ `Ask a service specialist` text link to the existing rounded secondary-button style without changing the approved label or destination.
- Verified the focused FAQ render at 1292 × 892 CSS px, device density 1: 58px height, 999px radius, no underline, and no arrow. `git diff --check` passes.

## Internet Connectivity Delivery Model reference style

final result: passed

- Source visual truth: `/Users/element8/Desktop/Screenshot 2026-09-23 at 4.24.35 PM.png` and `/Users/element8/Desktop/Screenshot 2026-09-23 at 4.06.32 PM.png`.
- Reframed the Delivery Model into the second reference’s two-column composition: large left title block, supporting copy and stacked ruled steps on the right, while preserving the Internet Connectivity copy and four delivery stages.
- Kept the existing industry chips as the section’s lower supporting row and added responsive single-column behavior below 1000px.
- Verified the focused render at 1292 × 892 CSS px, device density 1; the layout uses a two-column grid with four stacked step rows. Console check found only the existing Tailwind CDN production warning. `git diff --check` passes.

## Internet Connectivity footer background blend

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_jijPUy/Screenshot 2026-09-23 at 4.28.04 PM.png`.
- Matched the Internet Connectivity body canvas to the page gradient and softened the shared body veil, footer panel overlay, and footer backdrop so the transition does not introduce a separate horizontal color band.
- Verified the focused footer render at 1292 × 882 CSS px, device density 1; the page, footer, and backdrop now share the same atmospheric palette. Console check found only the existing Tailwind CDN production warning. `git diff --check` passes.

## Internet Connectivity Delivery Model exact visual treatment

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_rbfMjk/Screenshot 2026-09-23 at 4.38.26 PM.png`.
- Added the approved `assets/frame-cloud-stack.png` visual and matched the reference composition with a pill eyebrow, large left editorial heading, and right-side ruled journey list.
- Preserved the Internet Connectivity wireframe copy and four delivery stages; the asset is decorative and does not change the section’s interaction model.
- Verified at 1292 × 892 CSS px, device density 1; the image loads, the two-column layout is active, and step labels use the reference’s numbered format. `git diff --check` passes.

## Internet Connectivity Delivery Model title alignment

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_Il0yCp/Screenshot 2026-09-23 at 4.41.52 PM.png`.
- Added a desktop-only line break so the Delivery Model heading resolves to two lines at reference-sized widths, with the cloud-stack image remaining directly beneath the heading.
- Preserved responsive wrapping below 1401px and verified the image remains in the left column; `git diff --check` passes.

## Internet Connectivity Delivery Model image position

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_3o21pi/Screenshot 2026-09-23 at 4.46.48 PM.png`.
- Reduced the gap below the Delivery Model heading so the cloud-stack image sits higher beneath the title while preserving its size and left-column alignment.
- Verified the refreshed render at 1292 × 892 CSS px; the image element begins 44px below the title block and `git diff --check` passes.

## Internet Connectivity Delivery Model image raised again

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_3o21pi/Screenshot 2026-09-23 at 4.46.48 PM.png`.
- Removed the remaining visual gap from the transparent asset padding by raising the cloud-stack image 56px on desktop and proportionally on mobile; the title, steps, and image size remain unchanged.
- Verified the refreshed focused render at 1292 × 882 CSS px, device density 1; the artwork now sits closer beneath the heading and `git diff --check` passes.

## Internet Connectivity Delivery Model image horizontal alignment

final result: passed

- Source visual truth: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_DhreAM/Screenshot 2026-09-23 at 4.59.02 PM.png`.
- Shifted the cloud-stack artwork left within the existing left column while preserving its vertical position, scale, title, and journey list.
- Verified the refreshed render at 1292 × 882 CSS px, device density 1; the visible artwork aligns closer to the heading column and `git diff --check` passes.
## YOUR CLOUD JOURNEY full image visibility

final result: blocked

- Restored full opacity and neutral image filtering so the complete supplied cloud/server artwork is clearly visible while retaining screen blending and the soft outer mask.
- Bumped the stylesheet cache key to v10.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY image size increase

final result: blocked

- Increased the desktop and responsive journey image frame sizes while keeping normal flow, full visibility, and uncropped containment.
- Bumped the stylesheet cache key to v11.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY image slight upward adjustment

final result: blocked

- Reduced the post-title image gap from 48px to 20px so the enlarged artwork sits slightly higher while remaining below the headline.
- Bumped the stylesheet cache key to v12.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY top-padding crop

final result: blocked

- Changed the journey PNG fitting to bottom-anchored cover mode so transparent top padding is cropped and the artwork sits closer to the title.
- Bumped the stylesheet cache key to v15.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY remove top margin

final result: blocked

- Removed the remaining 48px top margin from the journey preview and reset the responsive margin so the image frame follows the title directly.
- Bumped the stylesheet cache key to v16.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Rayadah Cloud footer Connect icon parity

final result: blocked

- Matched the Rayadah Cloud Connect icons to the shared footer treatment used by the other pages: 45px circular tiles, centered glyphs, consistent border/background, and hover glow.
- Bumped the stylesheet cache key to v17.
- Static checks passed: HTML parsing, footer icon selectors, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY blended artwork refinement

final result: blocked

- Softened the journey image to .84 opacity with restrained saturation and brightness so it blends into the background while remaining visible.
- Bumped the stylesheet cache key to v18.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## YOUR CLOUD JOURNEY section edge blending

final result: blocked

- Removed the hard journey-section background and overflow boundary so the image edge and surrounding page canvas blend without a visible cutting line.
- Bumped the stylesheet cache key to v19.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Pricing disclaimer right-card placement

final result: blocked

- Moved the illustrative-estimate disclaimer into the right-hand estimated-price card and pinned it to the card’s lower-right edge with right-aligned text.
- Bumped the stylesheet cache key to v20.
- Static checks passed: HTML parsing, disclaimer placement, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Pricing disclaimer outside estimate card

final result: blocked

- Moved the disclaimer outside the price card and positioned it beneath the right-hand card on desktop, with responsive left alignment on smaller screens.
- Bumped the stylesheet cache key to v21.
- Static checks passed: HTML parsing, disclaimer placement, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Pricing disclaimer left alignment

final result: blocked

- Left-aligned the disclaimer beneath the right-hand estimate card while preserving its outside-card placement.
- Bumped the stylesheet cache key to v22.
- Static checks passed: HTML parsing, disclaimer placement, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Journey step punctuation cleanup

final result: blocked

- Removed the full stops from the journey step labels so they display as `01 Assess`, `02 Design`, `03 Move`, and `04 Operate`.
- Bumped the stylesheet cache key to v24.
- Static checks passed: HTML parsing and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## ONE CLOUD OPERATING MODEL supplied neon cards

final result: blocked

- Split the supplied neon artwork into three card-ready transparent PNGs for Cloud foundation, Data resilience, and Platform and operations.
- Added the supplied purple gradient texture behind each operating-model card while preserving the existing card layout, borders, and copy.
- Bumped the stylesheet cache key to v25.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## ONE CLOUD OPERATING MODEL updated neon cards

final result: blocked

- Replaced the three operating-model card visuals with the newly supplied neon artwork: cloud foundation, resilience/security, and platform operations.
- Kept the existing purple gradient background and screen-blended image treatment so the supplied dark image backgrounds integrate with each card.
- Bumped the stylesheet cache key to v26.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Reverted operating-model card image changes

final result: blocked

- Restored the previous `card-rayadah-cloud.png` artwork on all three operating-model cards.
- Removed the supplied gradient image layer and restored the original card background treatment.
- Bumped the stylesheet cache key to v27.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## ONE CLOUD OPERATING MODEL second and third card images

final result: blocked

- Applied the supplied composite artwork to the second and third operating-model cards: Data resilience and Platform and operations.
- Kept the first Cloud foundation card unchanged and preserved the existing card styling.
- Bumped the stylesheet cache key to v28.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.
- A fresh rendered screenshot could not be captured because the browser’s local `file://` preview policy blocks automated refresh access.
## Reverted second and third operating-model card images

final result: blocked

- Reverted the latest supplied-image change on the Data resilience and Platform and operations cards.
- Restored `card-rayadah-cloud.png` on all three operating-model cards.
- Bumped the stylesheet cache key to v29.
- Static checks passed: HTML parsing, image references, and `git diff --check`.
## ONE CLOUD OPERATING MODEL second and third supplied visuals

final result: blocked

- Applied the supplied transparent shield/server artwork to Data resilience and the supplied operations artwork to Platform and operations.
- Kept Cloud foundation unchanged and preserved the existing card layout/background treatment.
- Bumped the stylesheet cache key to v30.
- Static checks passed: HTML parsing, image references, and `git diff --check`.
## ONE CLOUD OPERATING MODEL second-card composite crop

final result: blocked

- Corrected the second and third card image sizing by using the supplied two-image composite with per-card horizontal cropping: the second card shows only the shield/server visual, and the third shows only the operations visual.
- Matched both card images to the first card’s visual scale and preserved the existing card background.
- Bumped the stylesheet cache key to v31.
- Static checks passed: HTML parsing, image references, CSS brace balance, and `git diff --check`.

## Careers footer icon circles follow-up

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_gnsw7F/Screenshot 2026-09-24 at 4.03.25 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?footer-icon-circles-check=1#open-positions`, reviewed in the in-app browser.
- Restored the shared 45px circular Connect icon containers used by the other standalone footers, with matching border, dark translucent fill, white glyph sizing, and a centered YouTube play capsule.
- Browser DOM verification confirmed all three Careers social items are 45px circles with 50% radius and the YouTube inner mark is 17×12px; `git diff --check` passes and CSS braces remain balanced.

## Careers Why Work related icons

final result: passed

- Source visual: `/var/folders/xh/w505rpxx4lxcx_cw3v9n_krh0000gn/T/TemporaryItems/NSIRD_screencaptureui_Csqv1n/Screenshot 2026-09-26 at 4.45.32 PM.png`.
- Implementation: `http://127.0.0.1:4173/Careers.html?careers-related-icons-check=1#careers-values-title`, reviewed in the in-app browser.
- Replaced the repeated cloud glyphs with approved related TopNet icons: servers for Impact, restore/renewal for Growth, cloud connection for Culture, and shield protection for Benefits.
- Preserved the existing green square icon shells, glow, card spacing, typography, and responsive grid; the rendered browser view shows all four distinct icons correctly.

## Careers Why Work icon visibility follow-up

final result: passed

- Switched the four related card icons to the matching 38×40px TopNet banner glyph assets so their silhouettes remain clearly visible at the existing 28px card-icon size.
- Kept the content mapping and green square shells unchanged: servers/Impact, restore/Growth, cloud/Culture, and shield/Benefits.
- Rechecked the rendered Careers section in the browser; the four icons are visibly distinct and readable.
