import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card.tsx'; 
import { within, userEvent, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Card',
  component: Card,
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
    src: "../Images/image.jpg",
    alt: "An image of a girl with an earring",
    width: "320px",
    disabled: false,
    height: "260px",
    text: "Hello this is my card"
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByTestId('myCard'));
  }
};

export const Disabled: Story = {
    args: {
    src: "../Images/image.jpg",
    alt: "An image of a girl with an earring",
    width: "320px",
    disabled: true,
    height: "260px",
    text: "Hello this is my card"
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myCard")).toHaveStyle({ filter: 'grayscale(1)', cursor: 'not-allowed' });
  }
};
  