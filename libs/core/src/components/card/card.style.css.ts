import { css } from 'lit'

const style = css`
  @layer card, card.desktop, card.tablet, card.mobile, card.span, card.space, card.align, card.debug;

  @layer card {
    :host {
      display: contents;
      --gds-color-elevation-light-black-15: rgba(27, 27, 24, 0.15);
      --gds-color-elevation-light-black-25: rgba(27, 27, 24, 0.25);
      --gds-color-elevation-light-black-20: rgba(27, 27, 24, 0.2);
      --gds-color-elevation-light-black-30: rgba(13, 13, 12, 0.3);

      --gds-elevation-xs: 0px 1px 1px 0px
          var(--gds-color-elevation-light-black-25),
        0px 0px 1px 0px var(--gds-color-elevation-light-black-30);

      --gds-elevation-s: 0px 3px 5px 0px
          var(--gds-color-elevation-light-black-20),
        0px 0px 1px 0px var(--gds-color-elevation-light-black-30);

      --gds-elevation-m: 0px 8px 12px 0px
          var(--gds-color-elevation-light-black-15),
        0px 0px 1px 0px var(--gds-color-elevation-light-black-30);

      --gds-elevation-l: 0px 10px 18px 0px
          var(--gds-color-elevation-light-black-15),
        0px 0px 1px 0px var(--gds-color-elevation-light-black-30);

      --gds-elevation-xl: 0px 18px 28px 0px
          var(--gds-color-elevation-light-black-15),
        0px 0px 1px 0px var(--gds-color-elevation-light-black-30);

      --gds-elevation-none: 0 0 0 0;
      --_elevation-desktop: var(--_elevation-desktop);
    }

    .card {
      border-radius: var(--_radius-desktop);
      background: var(--_background-desktop);
      box-shadow: var(--_elevation-desktop);
    }

    // 3xl	size/12	96px
    // 2xl	size/9	48px
    // xl	size/7	32px
    // l	size/6	24px
    // m	size/5	16px
    // s	size/3	8px
    // xs	size/2	4px
    // none	size/0	0px

    // Elevation 1
    // box-shadow: 0px 1px 1px 0px var(--color-elevation-light-black-25, rgba(27, 27, 24, 0.25)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);

    /* Elevation/Light/Level 2 */
    // box-shadow: 0px 3px 5px 0px var(--color-elevation-light-black-20, rgba(27, 27, 24, 0.20)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 3 */
    // box-shadow: 0px 8px 12px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 4 */
    // box-shadow: 0px 10px 18px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 5 */
    // box-shadow: 0px 18px 28px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);

    @media only screen and (max-width: 768px) {
      :host {
        border-radious: var(--_radius-tablet);
      }

      .card {
        box-shadow: var(--_elevation-tablet);
      }
    }

    @media only screen and (max-width: 425px) {
      :host {
        border-radious: var(--_radius-mobile);
      }
      .card {
        box-shadow: var(--_elevation-mobile);
      }
    }

    // Add hovered state for card
  }
`
export default style
