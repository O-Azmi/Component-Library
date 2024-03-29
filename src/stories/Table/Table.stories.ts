import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table.tsx'; 
import { within, expect } from '@storybook/test'; 

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
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    const myTable = canvas.getByTestId('myTable');
    expect(myTable).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
      disabled: true,
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      const myTable = canvas.getByTestId('myTable');
      expect(myTable).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };
  