import type { Meta, StoryObj } from '@storybook/react';
import List from './List.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/List',
  component: List,
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
    text: "Home",
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myList")).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
      text: "Home",
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myList")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };