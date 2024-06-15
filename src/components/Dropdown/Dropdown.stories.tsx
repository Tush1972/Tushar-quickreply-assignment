import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: { control: 'text' },
    labelVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    status: { control: 'radio', options: ['Unfilled', 'Filled', 'Disabled', 'Error'] },
    labelIconVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    leftIconVisibility: { control: 'radio', options: ['Visible', 'Hidden'] },
    helperText: { control: 'text' },
    required: { control: 'boolean' },
    text: { control: 'text' },
    type: { control: 'radio', options: ['SingleNoIcon', 'SingleRadio', 'Multi'] },
    activeItemIndex: { control: 'number' },
    items: { control: 'object' },
    onSelect: { action: 'selected' },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Dropdown Label',
  labelVisibility: 'Visible',
  status: 'Unfilled',
  labelIconVisibility: 'Visible',
  leftIconVisibility: 'Visible',
  helperText: 'Helper text goes here',
  required: false,
  text: '',
  type: 'SingleNoIcon',
  activeItemIndex: -1,
  items: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  onSelect: (value) => console.log(`Selected: ${value}`),
};
