# Iosevka ![Version](https://img.shields.io/github/release/be5invis/Iosevka.svg) [![Patreon](https://img.shields.io/badge/donate-patreon-red.svg)](https://www.patreon.com/user?u=5787198) [![Donate](https://img.shields.io/badge/donate-alipay-orange.svg)](http://7xpdnl.dl1.z0.glb.clouddn.com/T1v4huXnleXXXXXXXX.png)

Coders’ typeface, built from code.

![](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/preview-all.png)

## Installation

Quit your editor/program. Unzip and open the folder.

* **Instructions for Windows**: Download the fonts from the [Releases](https://github.com/be5invis/Iosevka/releases), select the font files and right click, then hit "Install".
  * On Windows 10 1809 or newer the default font installation is per-user, and it may cause compatibility issues for some applications, mostly written in Java. To cope with this, right click and select "Install for all users" instead. [Ref.](https://youtrack.jetbrains.com/issue/JRE-1166?p=IDEA-200145)
* **[Instructions for macOS](http://support.apple.com/kb/HT2509)**
  * Standard distribution in Homebrew: `brew tap caskroom/fonts && brew cask install font-iosevka` (May be outdated).
  * Customizable install using Homebrew: see [robertgzr/homebrew-tap](https://github.com/robertgzr/homebrew-tap).
* **Linux** : Copy the TTF files to your fonts directory → Run `sudo fc-cache`. 
  - Arch Linux users can install the font from the AUR [here](https://aur.archlinux.org/packages/ttf-iosevka) using an AUR wrapper or by doing it manually. [All variants](https://aur.archlinux.org/packages/?O=0&SeB=nd&K=ttf-iosevka&SB=n&SO=a&PP=50&do_Search=Go).
  - Void Linux users can install the font with `xbps-install font-iosevka`.
* **FreeBSD**: The font can be installed with `pkg install iosevka`.

## Weights, Variants and OpenType features

The typeface contains 9 weights (Thin to Heavy) alongside with both italic and oblique versions, with the same metrics as the regular one. 

![Weights sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/weights.png)

All versions include the same ranges of characters: Latin letters, Greek letters (including Polytonic), some Cyrillic letters, IPA symbols and common punctuations and some symbols. You can check out the full list [here](http://be5invis.github.io/Iosevka/specimen.html).

![Languages Sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/languages.png)

Iosevka supports accessing all letter variants using OpenType features.

![Style Sets](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/stylesets.png)

![Character Variants](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/charvars.png)

### Ligations

![Ligations Sample](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/ligations.png)

Iosevka’s default ligation set is assigned to `calt` feature, though not all of them are enabled by default.

Iosevka supports Language-Specific Ligations, which is the ligation set enabled only under certain languages. These ligation sets are assigned to custom feature tags, like `XHS0`.

## Building from Source

To build Iosevka you should:

1. Ensure that [`nodejs`](http://nodejs.org) (≥ 8.4), [`ttfautohint`](http://www.freetype.org/ttfautohint/), [`otfcc`](https://github.com/caryll/otfcc) (≥ 0.9.3).
2. Install necessary libs by `npm install`. If you’ve installed them, upgrade to the latest.
3. `npm run build -- contents::iosevka`.


You will find TTFs, as well as WOFF(2) web fonts and one Webfont CSS in the `dist/` directory.

## Build Your Own Style

Since version 2.0, Iosevka would no longer support building via `makefile`. To initialize a custom build, you need:

1. Create `private-build-plans.toml` file.

2. Add a build plan into `private-build-plans.toml`, following this format:

   ```toml
   [buildPlans.iosevka-custom]            # <iosevka-custom> is your plan name
   family = "Iosevka Custom"              # Font menu family name
   design = ["common styles"]             # Common styles
   upright = ["upright-only", "styles"]   # Upright-only styles
   italic = ["italic-only", "styles"]     # Italic-only styles
   oblique = ["oblique-only", "styles"]   # Oblique-only styles
   
   # Override default building weights
   # When buildPlans.<plan name>.weights is absent
   # All weights would built and mapped to default shape/CSS
   [buildPlans.iosevka-custom.weights.regular]
   shape = 400                            # Weight for glyph shapes
   menu  = 400                            # Weight for menu name
   css   = 400                            # Weight for WebFont CSS
   
   [buildPlans.iosevka-custom.weights.bold]
   shape = 700
   menu  = 700
   css   = 700
   
   # Override default building slant sets
   # Format: <upright|italic|oblique> = <"normal"|"italic"|"oblique">
   # When this section is absent, all slants would be built.
   [buildPlans.iosevka-custom.slants]
   upright = "normal"
   italic = "italic"
   oblique = "oblique"
   ```

3. Run `npm run build -- contents::<your plan name>` and the built fonts would be avaliable in `dist/`. Aside from `contents::<plan>`, other options are:

   1. `contents::<plan>` : TTF (Hinted and Unhinted), WOFF(2) and Webfont CSS;
   2. `ttf::<plan>` : TTF;
   3. `ttf-unhinted::<plan>` : Unhinted TTF only;
   4. `woff::<plan>` : TTF and WOFF only;
   5. `woff2::<plan>` : TTF and WOFF2 only;
      - Note: Since version 2.2.0, we are using two colons (`::`) in the build target names.

The current available styles for `design`/`upright`/`italic`/`oblique` options are:

* Styles for general shape:
  * `sans` : Sans serif (default).
  * `slab` : Slab serif.
* Styles related to ligations and spacing:
  - `term` : Disable ligations and exact monospace.
    - The font built will not contain ligatures.
    - All glyphs wider than one letter would be deleted.
    - In case of your OS or editor cannot handle ligatures correctly, you can disable ligations with it.
  - `termlig` : Similar to `term`, the font is exact monospace to make `fontconfig` happy, while ligations are still present.
  - `no-ligation` : Disable ligation only.
  - `no-cv-ss` : Prevent generation of `cv##` and `ss##` features.
  - `type` : Make some symbols, like arrows (`→`) full-width.
* All registered `ss##` and `cv##` feature tags, including:
  * `ss01`~`ss10` : Predefined stylistic sets based on other Monospace fonts.
  * `cv01`~`cv53` : Standalone character variants.
* Styles for ligation sets, include:
  * `ligset-haskell`: Default ligation set would be assigned to Haskell.
  * `ligset-idris`: Default ligation set would be assigned to Idris.
  * `ligset-coq`: Default ligation set would be assigned to Coq.
  * `ligset-elm`: Default ligation set would be assigned to Elm.
  * `ligset-ml`: Default ligation set would be assigned to ML.
  * `ligset-fs`: Default ligation set would be assigned to F#.
  * `ligset-fstar`: Default ligation set would be assigned to F\*.
  * `ligset-swift`: Default ligation set would be assigned to Swift.
  * `ligset-purescript`: Default ligation set would be assigned to PureScript.
* Styles for further customizing default (`calt`) ligation sets. When any of these styles present in your configuration, the `ligset-*` styles would be overridden.
  * `calt-clear`: Clear the `calt` ligation set.
  * `calt-center-ops`: Vertically align some of the operators (like `*`) to the center position it is before or after a "center" operator (like `+`);
  * `calt-arrow`: Enable ligation set that forms arrows;
  * `calt-arrow2`: Enable ligation for more arrows, like `>>=`;
  * `calt-html-comment`: Enable ligation for `<!--` and `<!---`;
  * `calt-eqeq`: Enable ligation for `==` and `===`;
  * `calt-ineq`: Enable ligation for `<=` and `>=`;
  * `calt-arrowZALE`: Enable ligation for `<=` to form a left double arrow;
  * `calt-arrowZAGE`: Enable ligation for `>=` to form a right inverse double arrow;
  * `calt-exeq`: Enable ligation for `!=` and `!==`;
  * `calt-slasheq`: Enable ligation for `/=` and `/==`;
  * `calt-plusplus`: Enable ligation for `++` and further plus-chaining;
  * `calt-llgg`: Enable ligation for `<<`, `>>` and other angle-bracket chaining;
  * `calt-trig`: Enable ligation for `<|`, `|>` , `<||`, and other bar-and-angle-bracket symbols;
  * `calt-dotoper`: Treat dot (`.`) as operator and perform chained centering;
  * `calt-brst`: Center asterisk in `(*` and `*)`;
  * `calt-logic`: Enable ligation for `/\` and `\/`;
  * `calt-colons`: Enable ligation for `::` and `:::` ;
* Styles for changing the line space (leading):
  * `leading-750`, `leading-1000`, `leading-1250`, `leading-1500`, `leading-1750`, `leading-2000`: Change the line space. Default is `leading-1250`.
  * `win-metric-pad-0`, `win-metric-pad-50`, `win-metric-pad-100`, `win-metric-pad-150`, `win-metric-pad-200`, `win-metric-pad-250`, `win-metric-pad-300`: Add extra space to [OS/2 table’s Win metrics](https://docs.microsoft.com/en-us/typography/opentype/spec/os2#uswinascent) to avoid clipping in certain legacy software.
* Styles for changing Powerline symbols' position:
  * `powerline-scale-y-750`, `powerline-scale-y-875`, `powerline-scale-y-1000`, `powerline-scale-y-1125`, `powerline-scale-y-1250`, `powerline-scale-y-1375`, `powerline-scale-y-1500`: Resize the Powerline symbols vertically, from 75% to 150%.
  * `powerline-scale-x-750`, `powerline-scale-x-875`, `powerline-scale-x-1000`, `powerline-scale-x-1125`, `powerline-scale-x-1250`, `powerline-scale-x-1375`, `powerline-scale-x-1500`: Resize the Powerline symbols horizontally, from 75% to 150%.
  * `powerline-shift-y-n500`, `powerline-shift-y-n450`, `powerline-shift-y-n400`, `powerline-shift-y-n350`, `powerline-shift-y-n300`, `powerline-shift-y-n250`, `powerline-shift-y-n200`, `powerline-shift-y-n150`, `powerline-shift-y-n100`, `powerline-shift-y-n50`, `powerline-shift-y-0`, `powerline-shift-y-p50`, `powerline-shift-y-p100`, `powerline-shift-y-p150`, `powerline-shift-y-p200`, `powerline-shift-y-p250`, `powerline-shift-y-p300`, `powerline-shift-y-p350`, `powerline-shift-y-p400`, `powerline-shift-y-p450`, `powerline-shift-y-p500`: Shift the Powerline symbols vertically, from -0.5em to +0.5em.
  * `powerline-shift-x-n500`, `powerline-shift-x-n450`, `powerline-shift-x-n400`, `powerline-shift-x-n350`, `powerline-shift-x-n300`, `powerline-shift-x-n250`, `powerline-shift-x-n200`, `powerline-shift-x-n150`, `powerline-shift-x-n100`, `powerline-shift-x-n50`, `powerline-shift-x-0`, `powerline-shift-x-p50`, `powerline-shift-x-p100`, `powerline-shift-x-p150`, `powerline-shift-x-p200`, `powerline-shift-x-p250`, `powerline-shift-x-p300`, `powerline-shift-x-p350`, `powerline-shift-x-p400`, `powerline-shift-x-p450`, `powerline-shift-x-p500`: Shift the Powerline symbols horizontally, from -0.5em to +0.5em.
* Styles for changing the width:
  * `expanded`: Expand the width by 10%;
  * `compressed`: Compress the width by 10%.
  * NOTE: these styles are highly experimental. Handle with extreme care.
* Styles for individual characters. They are easy-to-understand names of the `cv##` styles, including:
  * Styles for letter `l`:
    * `v-l-hooky` : Hooky `l`.
    * `v-l-zshaped` : Z-shaped `l`.
    * `v-l-serifed` : Serifed `l` (default for upright and oblique).
    * `v-l-italic` : Italic `l` (default for italic).
    * `v-l-tailed` : `l` with a curved tail.
    * `v-l-hookybottom` : `l` with a straight tail.
    * `v-l-line` : `l` like a straight line.
  * Styles for letter `i`:
    * `v-i-hooky` : Hooky `i`.
    * `v-i-zshaped` : Z-shaped `i`.
    * `v-i-serifed` : Serifed `i` (default for upright and oblique).
    * `v-i-italic` : Italic `i` (default for italic).
    * `v-i-line` : `i` like a straight line.
  * Styles for letter `j`:
    * `v-j-line`: `j` like a straight line.
    * `v-j-serifed`: `j` with top serif (default).
  * Styles for letter `a`:
    * `v-a-doublestorey` : Double-storey `a` (default for upright and oblique).
    * `v-a-singlestorey` : Single-storey `a` (default for italic).
  * Styles for letter `f`:
    * `v-f-straight`: `f` without bottom hook (default for upright and oblique).
    * `v-f-tailed`: `f` with a leftward bottom hook (default for italic).
  * Styles for letter `g`:
    * `v-g-doublestorey` : Double-storey `g` (default for upright and oblique).
    * `v-g-singlestorey` : Single-storey `g` (default for italic).
    * `v-g-opendoublestorey` : Open Double-storey `g`.
  * Styles for letter `m`:
    * `v-m-longleg` : `m` with long middle leg (default).
    * `v-m-shortleg` : `m` with shorter middle leg.
  * Styles for letter `t`:
    * `v-t-standard` : Standard `t` shape (default).
    * `v-t-cross` : Futura-like `t` shape.
  * Styles for letter `Q`:
    * `v-q-taily` : `Q` with a curly tail (default).
    * `v-q-straight` : `Q` with a straight tail in the old versions.
  * Styles for letter `y`:
    * `v-y-straight`: More-straight letter `y`.
    * `v-y-curly`: Curly, cursive-like `y`.
  * Styles for zero (`0`):
    * `v-zero-slashed` : Slashed Zero `0` (default).
    * `v-zero-dotted` : Dotted Zero `0`.
    * `v-zero-unslashed` : O-like `0`.
  * Styles for one (`1`)
    * `v-one-serifed` : `1` with bottom serif (default for Slab).
    * `v-one-hooky` : `1` without bottom serif (default for Sans).
  * Styles for three (`3`):
    * `v-three-flattop` : Flat top `3` (Like Museo Sans / Montserrat).
    * `v-three-twoarks` : Arched top `3` (default).
  * Styles for ASCII tilde (`~`), asterisk (`*`), paragraph(`¶`), underscore (`_`) and ASCII Caret (`^`):
    * `v-tilde-high` : Higher tilde `~`.
    * `v-tilde-low` : Lower tilde `~` (default).
    * `v-asterisk-high` : Higher asterisk `*` (default).
    * `v-asterisk-low` : Lower asterisk `*`.
    * `v-asterisk-hexhigh` : Higher six-pointed asterisk `*`.
    * `v-asterisk-hexlow` : Lower six-pointed asterisk `*`.
    * `v-paragraph-high` : Higher paragraph symbol `¶` (default).
    * `v-paragraph-low` : Lower paragraph symbol `¶`.
    * `v-caret-high` : Higher circumflex `^` (default).
    * `v-caret-low` : Lower circumflex `^`.
    * `v-underscore-high` : Higher underscore `_` (default).
    * `v-underscore-low` : Lower underscore `_`.
  * Styles for Percent (`%`):
    * `v-percent-dots`: Percent `%`, Per-mille `‰` and basis point `‱` will use rectangular dots.
    * `v-percent-rings`: Percent `%`, Per-mille `‰` and basis point `‱` will use rings (default).
  * Styles for At (`@`):
    * `v-at-long` : The long, three-fold At symbol in Iosevka 1.7.x.
    * `v-at-fourfold` : The traditional, four-fold At symbol.
    * `v-at-short` : The shorter, Fira-like At symbol introduced in Iosevka 1.8.
  * Styles for Eszet (`ß`):
    * `v-eszet-traditional` : Traditional, Fraktur-like Eszet.
    * `v-eszet-sulzbacher` : A more modern, beta-like Eszet (default).
  * Styles for curly brackets (`{}`):
    * `v-brace-straight` : More straight braces.
    * `v-brace-curly` : More curly braces (default).
  * Styles for dollar symbol (`$`):
    * `v-dollar-open` : Dollar symbol with open contour.
    * `v-dollar-through` : Dollar symbol with strike-through vertical bar (default).
    * `v-dollar-opencap` : Dollar symbol with open contour, not exceeding baseline and ascender.
    * `v-dollar-throughcap` : Dollar symbol with strike-through vertical bar, not exceeding baseline and ascender.
  * Styles for Number sign (`#`):
    * `v-numbersign-upright` : Number sign with vertical bars (default).
    * `v-numbersign-slanted` : Number sign with slanted bars.

## For Chinese and Japanese users...

→ [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic).

---

![Family Matrix](https://raw.githubusercontent.com/be5invis/Iosevka/master/images/matrix.png)
