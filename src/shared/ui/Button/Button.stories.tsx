import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'

// shared
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: 'Text',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
}

export const SquareSizeSM = Template.bind({})
SquareSizeSM.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.SM,
}

export const SquareSizeMD = Template.bind({})
SquareSizeMD.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.MD,
}

export const SquareSizeLG = Template.bind({})
SquareSizeLG.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  isSquare: true,
  size: ButtonSize.LG,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}
