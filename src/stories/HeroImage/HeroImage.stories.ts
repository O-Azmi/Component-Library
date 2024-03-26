import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Hero Image',
  component: HeroImage,
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
    src: "../Images/HeroImage.jpg",
    alt: "An image of a beach",
    width: "800px",
    disabled: false,
    height: "300px"
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myHeroImage")).toBeInTheDocument();
}
};

export const Disabled: Story = {
    args: {
    src: "../Images/HeroImage.jpg",
    alt: "An image of a beach",
    width: "800px",
    disabled: true,
    height: "300px",
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myHeroImage")).toHaveStyle({ filter: 'grayscale(1)', cursor: 'not-allowed' });
  }
  };
  