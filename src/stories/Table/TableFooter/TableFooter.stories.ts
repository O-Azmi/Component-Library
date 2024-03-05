import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter.tsx'; 

const meta: Meta = {
  title: 'Example/Table/Table Footer',
  component: TableFooter,
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
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
  };
  