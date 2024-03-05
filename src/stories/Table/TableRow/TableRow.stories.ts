import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow.tsx'; 

const meta: Meta = {
  title: 'Example/Table/Table Row',
  component: TableRow,
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
  