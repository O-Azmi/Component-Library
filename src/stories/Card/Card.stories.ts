import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card.tsx'; 

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
  };
  