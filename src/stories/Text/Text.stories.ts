import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text.tsx'; 

const meta: Meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio'},
    options: ['small', 'medium', 'large'] },
    bold: { control: { type: 'radio'},
    options: ['default', 'bold'] }
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'default',
    underline: false
  },
};
export const Bold: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'bold',
    underline: false

  },
};
export const Underline: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'bold',
    underline: true
  },
};
export const Disabled: Story = {
    args: {
      label: 'Label',
      size: 'medium',
      disabled: true,
      underline: false
    },
  };