import type { Meta, StoryObj } from '@storybook/react';

import RadioButton from './RadioButton.tsx'; 

const meta: Meta = {
  title: 'Example/Radio Button',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Radio',
  },
};

export const Disabled: Story = {
    args: {
      disabled: true
    },
  };
  