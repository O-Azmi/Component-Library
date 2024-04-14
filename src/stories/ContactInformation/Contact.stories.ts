import type { Meta, StoryObj } from '@storybook/react';
import Contact from './Contact.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Contact Information',
  component: Contact,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    font: { control: { type: 'radio'},
    options: ['default', 'bold', 'italic'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    font: 'default',
    isvalid: false,
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myContact")).toBeInTheDocument();
  }
};

export const Disabled: Story = {
    args: {
      label: 'Label',
      font: 'default',
      isvalid: false,
      disabled: true,
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myContact")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };