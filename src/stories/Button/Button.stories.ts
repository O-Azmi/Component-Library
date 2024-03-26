import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx'; 
import { within, userEvent, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'radio'},
    options: ['small', 'medium', 'large'] } 
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: false,
    secondary: false,
    onClick: () => console.log("button clicked")
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    const mebutton = canvas.getByTestId('myButton');
    await userEvent.hover(mebutton);
    await userEvent.click(mebutton)
  }
};
export const Secondary: Story = {
  args: {
    label: 'Submit',
    backgroundColor : '#cccccc', 
    size: 'medium',
    disabled: false,
    secondary: true,
    onClick: () => console.log("button clicked")

  },
  play: async ({ canvasElement }) => { 
    const canva = within(canvasElement);
    const mebutton = canva.getByTestId('myButton');
    await userEvent.hover(mebutton);
    await userEvent.click(mebutton)    
  ;}
};

export const Disabled: Story = { 
  args: {
    label: 'Disabled', 
    backgroundColor : '#3a4556', 
    size: 'medium',
    disabled: true,
    secondary: false,
    onClick: () => console.log("button clicked")
  },
  play: async ({ canvasElement }) => { 
    const canv = within(canvasElement);
    expect(canv.getByTestId("myButton")).toHaveProperty('disabled', true);
}}