import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table.tsx'; 

const meta: Meta = {
  title: 'Example/Table/Table',
  component: Table,
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
  