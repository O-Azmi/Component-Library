import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Table/Table Cell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    border: { control: { type: 'radio'},
    options: ['left', 'right', 'top', 'bottom', 'around'] },

    bold: { control: { type: 'radio'},
    options: ['default', 'bold'] },
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "200",
    height: "50px",
    border: "around",
    backgroundColor: "#D9D9D9",
    text: "Skills",
    bold: "default"
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    const myTableCell = canvas.getByTestId('myTableCell');
    expect(myTableCell).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
        width: "200px",
        height: "50px",
        border: "around",
        backgroundColor: "#D9D9D9",
        disabled: true,
        text: "Skills",
        bold: "default"
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      const myTableCell = canvas.getByTestId('myTableCell');
      expect(myTableCell).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };
  