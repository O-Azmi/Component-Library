import type { Meta, StoryObj } from '@storybook/react';
import ContactPage from './ContactPage.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Contact Page',
  component: ContactPage,
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
    disabled: false
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myContactPage")).toBeInTheDocument();
  }
};


export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myContactPage")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };