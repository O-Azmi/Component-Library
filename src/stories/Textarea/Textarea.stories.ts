import type { Meta, StoryObj } from '@storybook/react';
import Label from './Textarea.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Textarea',
  component: Label,
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
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myTextarea")).toBeInTheDocument();
  }
};

export const Invalid: Story = {
    args: {
      label: 'Label',
      font: 'default',
      isvalid: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myLabel")).toHaveStyle({ color: '#ff0000'});
      expect(canvas.getByTestId("myTextarea")).toHaveStyle({borderColor: '#ff0000'})
    }
  };
export const Disabled: Story = {
    args: {
      label: 'Label',
      font: 'default',
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myLabel")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' });
      expect(canvas.getByTestId("myTextarea")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };