import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Table/Table Footer',
  component: TableFooter,
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
    const myTableFooter = canvas.getByTestId('myTableFooter');
    expect(myTableFooter).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      const myTableFooter = canvas.getByTestId('myTableFooter');
      expect(myTableFooter).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };
  