KOUK CREATIVES — HOMEPAGE
=========================

Static build. No frameworks, no build step. Open index.html in a browser,
or drop the whole folder on any host.

FILES
-----
index.html                 Page markup
css/styles.css             All styling (design tokens are CSS variables at the top)
js/main.js                 Content data + all interactions
assets/kouki-photography.png   Local image


WHERE THINGS LIVE
-----------------
All repeating content is defined as arrays at the top of js/main.js and
rendered into the page. Edit the array, the page updates. These are:

  CLIENT_LOGOS   the scrolling trust strip
  PROJECTS       the filterable showcase grid (platform sets the tab + tile tint)
  SERVICES       the eight capability cards
  STEPS          the four process steps
  REVIEWS        the review grid (empty `photo` renders a dashed initials avatar)
  FAQS           the accordion
  NEEDS          the chips in the quote form
  RAIL           the floating section navigator on the right

The five case studies and the hero are written directly in index.html, since
each one is laid out differently.


COLOURS
-------
Change these once in css/styles.css (`:root`) and the whole page follows:

  --bg      #FBF8F3   page cream
  --ink     #17140F   headings and body
  --accent  #E4552B   Kouk orange, CTAs only
  --header  #1E2C30   deep teal header bar


BEFORE YOU GO LIVE
------------------
1. Links are all `#` placeholders. Point them at real pages.
2. The quote form does not submit anywhere. Wire `#quoteForm` to your
   handler (Formspark, Netlify Forms, your CRM) in js/main.js -> initForm().
3. Several images hotlink to client CDNs (Truffle Lovers, Serpenti,
   Webflow). Download and self-host them in assets/ before launch.
4. Case study metrics (1.9s, +59%, 3x, +64%, etc.) are placeholders.
   Replace with your real numbers.
5. Five of the six reviews are marked placeholders. Swap them in as you
   collect them.
6. Add a favicon and Open Graph image.


BROWSER SUPPORT
---------------
Modern evergreen browsers. Uses IntersectionObserver (with fallbacks),
CSS grid, and backdrop-filter. Animations degrade gracefully.
