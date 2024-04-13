import type { Meta, StoryObj } from '@storybook/react';
import ProjectPage from './ProjectPage.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Project Page',
  component: ProjectPage,
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
    expect(canvas.getByTestId("myProjectPage")).toBeInTheDocument();
  }
};


export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myProjectPage")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
    }
  };