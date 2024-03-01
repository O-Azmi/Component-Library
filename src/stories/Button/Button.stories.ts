import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx'; 

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'radio'},
    options: ['small', 'medium', 'large'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: false,
    secondary: false
  },
};
export const Secondary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#cccccc', 
    size: 'medium',
    disabled: false,
    secondary: true
  },
};

export const Disabled: Story = { 
  args: {
    label: 'Disabled', 
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: true,
    secondary: false
  },
};