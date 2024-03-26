import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image.tsx'; 
import { within, userEvent, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Image',
  component: Image,
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
    enabled: true,
    src: "../Images/image.jpg",
    alt: "An image of a girl with an earring",
    width: "300px",
    disabled: false,
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myImage")).toBeInTheDocument();
    await userEvent.hover(canvas.getByTestId("myImage"));
}
};

export const Disabled: Story = {
    args: {
    src: "../Images/image.jpg",
    alt: "An image of a girl with an earring",
    width: "300px",
    disabled: true,
    enabled: false,
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myImage")).toHaveStyle({ filter: 'grayscale(1)', cursor: 'not-allowed' });
  }
  };
  