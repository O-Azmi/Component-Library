import type { Meta, StoryObj } from '@storybook/react';
import UnorderedList from './UnorderedList.tsx';
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/UnorderedList',
  component: UnorderedList,
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

  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myUnorderedList")).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myUnorderedList")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };