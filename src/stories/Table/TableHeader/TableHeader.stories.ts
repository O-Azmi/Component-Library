import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader.tsx'; 

const meta: Meta = {
  title: 'Example/Table/Table Header',
  component: TableHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    border: { control: { type: 'radio'},
    options: ['left', 'right', 'top', 'bottom', 'around'] },

    bold: { control: { type: 'radio'},
    options: ['default', 'bold'] },
  },
  
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: "200",
    height: "50px",
    border: "around",
    backgroundColor: "#D9D9D9",
    text: "Skills",
  },
};

export const Disabled: Story = {
    args: {
        width: "200px",
        height: "50px",
        border: "around",
        backgroundColor: "#D9D9D9",
        disabled: true,
        text: "Skills",

    },
  };
  