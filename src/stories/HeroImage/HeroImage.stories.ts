import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage.tsx'; 

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
};

export const Disabled: Story = {
    args: {
    src: "../Images/HeroImage.jpg",
    alt: "An image of a beach",
    width: "800px",
    disabled: true,
    height: "300px",
    },
  };
  