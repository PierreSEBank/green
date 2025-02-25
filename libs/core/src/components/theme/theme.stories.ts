import type { Meta, StoryObj } from '@storybook/web-components'
import '../media/img'
import '../media/video'
import '../layout/card'
import '../layout/container'
import '../layout/flex'
import '../content/text'
import '../content/divider'
import '../icon/icons/arrow-down.js'
import '../icon/icons/arrow-right.js'
import '../icon/icons/circles-three.js'
import { html } from 'lit'

/**
 *
 *
 * The `gds-theme` is a custom element that provides a color scheme for a part of the DOM tree. <br>
 * Every descendant of this component will inherit the color scheme set on this component.
 *
 * @status beta
 *
 * ## Usage
 *
 * ```html
 * <gds-theme color-scheme="dark">
 *   <!-- Your content here will inherit the dark theme -->
 * </gds-theme>
 * ```
 *
 * ## Properties
 *
 * - `colorScheme`: This property reflects the theme mode and can be set to `light`, `dark`, or `auto`.
 *   - `light`: Applies the light theme.
 *   - `dark`: Applies the dark theme.
 *   - `auto`: Automatically switches between light and dark themes based on the user's system preferences.
 *
 * ## Methods
 *
 * - `connectedCallback()`: This lifecycle method is called when the element is added to the document.
 *

 * ## Example
 *
 * ```html
 * <gds-theme color-scheme="light">
 *      <gds-text>
 *            The text will have a light scheme applied, overriding the system preferences.
 *      </gds-text>
 * </gds-theme>
 * ```
 *
 *
 * Inpsect this example to see how to use the `gds-theme` component in practice.
 */

const meta: Meta = {
  title: 'Docs/Theme',
  component: 'gds-theme',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { disable: true },
    globals: {
      disableTheme: true,
    },
  },
}

/**
 * Inpsect this example to see how `gds-theme` is being used in practice.
 */

export const Theme: Story = {
  ...DefaultParams,
  parameters: {
    ...DefaultParams.parameters,
    globals: {
      disableTheme: true,
    },
  },
  render: () => html`
    <gds-grid columns="xs{1} m{3} l{3}" gap="l">
      <gds-card shadow="s{xs} m{xs} l{s}" radius="xs" overflow="hidden">
        <gds-flex display="flex" gap="0" direction="column" align="stretch">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/cd458a77-13f1-495c-960c-ce23a18e5d9f"
              ratio="1/1"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            direction="column"
            padding="s{xs} m{l} l{l}"
            align="flex-start"
            gap="l"
          >
            <gds-flex gap="s" direction="column">
              <gds-text tag="h2" size="body-l">James Doe</gds-text>
              <gds-text>
                Passionate software engineer with a love for coding and
                problem-solving.
              </gds-text>
            </gds-flex>
            <gds-divider opacity="0.2"></gds-divider>
            <gds-button>
              Follow
              <gds-icon-circles-three slot="lead"></gds-icon-circles-three>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card shadow="l" radius="m" border="3xs/base300" overflow="hidden">
        <gds-flex gap="m" direction="column" padding="s">
          <gds-container position="relative">
            <gds-img
              src="https://github.com/seb-oss/green/assets/2398447/dff488cc-700e-47f9-b7f7-3788eb742c11"
              ratio="1/1"
              radius="xs"
            ></gds-img>
            <gds-container position="absolute" inset="20px 20px auto auto">
              <gds-button>
                <gds-icon-arrow-down></gds-icon-arrow-down>
              </gds-button>
            </gds-container>
          </gds-container>
          <gds-flex
            direction="column"
            padding="s{xs} m{s} l{s}"
            align="flex-start"
            gap="l"
          >
            <gds-flex gap="s" direction="column">
              <gds-text tag="h2" size="body-l">Lorem Ipsum</gds-text>
              <gds-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </gds-text>
            </gds-flex>
            <gds-button>
              Button
              <gds-icon-arrow-right slot="trail"></gds-icon-arrow-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
      </gds-card>
      <gds-card radius="m" overflow="hidden">
        <gds-flex position="relative" height="100%">
          <gds-video
            src="https://github.com/seb-oss/green/assets/2398447/d77a95d0-e4d7-4c49-bd95-50d0f72f1a7a"
            fit="cover"
            ratio="1/1"
            events="none"
            autoplay
            muted
            loop
          ></gds-video>
          <gds-card
            position="absolute"
            inset="50% 0px 0px 0px"
            filter="0"
            background="base900/0.6"
            color="white-text"
            mask="top"
          >
            <gds-flex
              direction="column"
              justify="flex-end"
              padding="4xl 2xl 2xl 2xl"
              gap="l"
              height="100%"
            >
              <gds-container>
                <gds-text tag="h4" size="body-l">Jane Doe</gds-text>
                <gds-text tag="p" size="body-m">UX Designer</gds-text>
              </gds-container>
              <gds-flex gap="s">
                <gds-button rank="secondary">Message</gds-button>
                <gds-button rank="secondary">Follow</gds-button>
              </gds-flex>
            </gds-flex>
          </gds-card>
        </gds-flex>
      </gds-card>
    </gds-grid>
  `,
}
