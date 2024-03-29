import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Table/Table Row',
  component: TableRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
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
    const myTableRow = canvas.getByTestId('myTableRow');
    expect(myTableRow).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
      disabled: true,
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      const myTableRow = canvas.getByTestId('myTableRow');
      expect(myTableRow).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };
  