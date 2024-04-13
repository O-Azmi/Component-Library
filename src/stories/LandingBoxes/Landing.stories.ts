import type { Meta, StoryObj } from '@storybook/react';
import LandingBox from './Landing.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Landing Box',
  component: LandingBox,
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
    expect(canvas.getByTestId("myLandingDiv")).toBeInTheDocument();
  }
};


export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myLandingDiv")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };