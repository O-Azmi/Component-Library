import type { Meta, StoryObj } from '@storybook/react';
import Label from './Form.tsx'; 

const meta: Meta = {
  title: 'Example/Form',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    font: { control: { type: 'radio'},
    options: ['default', 'bold', 'italic'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isvalid: false
  },
};

export const Invalid: Story = {
    args: {
      isvalid: true
    },

  };
export const Disabled: Story = {
    args: {
      disabled: true
    },

  };