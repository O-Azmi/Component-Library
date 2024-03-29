import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton.tsx'; 
import { within, userEvent, expect } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/Radio Button',
  component: RadioButton,
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
    disabled: false,
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);
    const myRadio = canvas.getByTestId('myRadio');
    await userEvent.click(myRadio)
  }
};

export const Disabled: Story = {
    args: {
      disabled: true
    },
    play: async ({ canvasElement }) => { 
      const canvas = within(canvasElement);
      const myRadio = canvas.getByTestId('myRadio');
      expect(myRadio).toHaveStyle({ opacity: '0.5', cursor: 'not-allowed' })
    }
  };
  