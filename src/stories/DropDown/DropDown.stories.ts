import { Meta, StoryObj } from '@storybook/react';
import DropDown from './DropDown';
import { within, userEvent } from '@storybook/test'; 

const meta: Meta = {
  title: 'Example/DropDown',
  component: DropDown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Menu",
    disabled: false,
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByTestId('myDropDown'));
    await userEvent.click(canvas.getByTestId('myDropDown'));
    setTimeout(async () => {
      await userEvent.click(canvas.getByTestId('myDropDown'));
    }, 2000);
    
    await userEvent.hover(canvas.getByTestId('myItem1'));
    await userEvent.click(canvas.getByTestId('myItem1'));

    await userEvent.hover(canvas.getByTestId('myItem2'));
    await userEvent.click(canvas.getByTestId('myItem2'));

    await userEvent.hover(canvas.getByTestId('myItem3'));
    await userEvent.click(canvas.getByTestId('myItem3'));

    await userEvent.hover(canvas.getByTestId('myItem4'));
    await userEvent.click(canvas.getByTestId('myItem4'));

  }
};

export const Disabled: Story = {
  args: {
    text: "Menu",
    disabled: true,
  },
  play: async ({ canvasElement }) => { 
    const canvas = within(canvasElement);

    await userEvent.hover(canvas.getByTestId('myDropDown'));
    await userEvent.click(canvas.getByTestId('myDropDown'));
    setTimeout(async () => {
      await userEvent.click(canvas.getByTestId('myDropDown'));
    }, 2000);
    
    await userEvent.hover(canvas.getByTestId('myItem1'));
    await userEvent.click(canvas.getByTestId('myItem1'));

    await userEvent.hover(canvas.getByTestId('myItem2'));
    await userEvent.click(canvas.getByTestId('myItem2'));

    await userEvent.hover(canvas.getByTestId('myItem3'));
    await userEvent.click(canvas.getByTestId('myItem3'));

    await userEvent.hover(canvas.getByTestId('myItem4'));
    await userEvent.click(canvas.getByTestId('myItem4'));

  }
};
