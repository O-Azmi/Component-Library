import type { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown'

const meta: Meta = {
  title: 'Example/DropDown',
  component: DropDown,
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
    disabled: false,
  },
};

export const Disabled: Story = { 
  args: {
    disabled: true,
  },
};