import type { Meta, StoryObj } from '@storybook/react';
import ProjectsGrid from './ProjectsGrid.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Projects Grid',
  component: ProjectsGrid,
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
    expect(canvas.getByTestId("MyGridPage")).toBeInTheDocument();
  }
};


export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("MyGridPage")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };