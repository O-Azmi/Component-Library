import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Label',
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
    expect(canvas.getByTestId("myLabel")).toBeInTheDocument();
  }
};

export const Invalid: Story = {
    args: {
      label: 'Label',
      font: 'default',
      isValid: false
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myLabel")).toHaveStyle({ color: '#ff0000'});
      expect(canvas.getByTestId("myInputField")).toHaveStyle({borderColor: '#ff0000'})
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
      expect(canvas.getByTestId("myInputField")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };