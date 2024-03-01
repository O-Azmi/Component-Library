import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image.tsx'; 

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
};

export const Disabled: Story = {
    args: {
    src: "../Images/image.jpg",
    alt: "An image of a girl with an earring",
    width: "300px",
    disabled: true,
    enabled: false,
    },
  };
  