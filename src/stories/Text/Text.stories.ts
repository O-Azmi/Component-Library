import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text.tsx'; 
import { within, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'radio'},
    options: ['small', 'medium', 'large'] },
    bold: { control: { type: 'radio'},
    options: ['default', 'bold'] }
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'default',
    underline: false
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myText")).toBeInTheDocument();
  }
};
export const Bold: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'bold',
    underline: false
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myText")).toBeInTheDocument();
    expect(canvas.getByTestId("myText")).toHaveStyle({ fontWeight: "800" });
  }
};
export const Underline: Story = {
  args: {
    label: 'Label',
    size: 'medium',
    bold: 'bold',
    underline: true
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    expect(canvas.getByTestId("myText")).toBeInTheDocument();
    expect(canvas.getByTestId("myText")).toHaveStyle({ borderBottom: '1px solid #000000' });
  }
};
export const Disabled: Story = {
    args: {
      label: 'Label',
      size: 'medium',
      disabled: true,
      underline: false
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      expect(canvas.getByTestId("myText")).toBeInTheDocument();
      expect(canvas.getByTestId("myText")).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };