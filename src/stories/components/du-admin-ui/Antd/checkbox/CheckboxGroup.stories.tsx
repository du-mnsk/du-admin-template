import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { CheckboxChangeEvent } from 'antd/lib/checkbox'
import type { CheckboxValueType } from 'antd/lib/checkbox/Group'

import { Antd } from '@/shared/components/du-admin-ui/Antd'

// 스토리북에서 컴포넌트 이름을 "Antd.CheckboxGroup"로 표시
if (Antd.CheckboxGroup) {
  Antd.CheckboxGroup.displayName = 'Antd.CheckboxGroup'
}

const meta = {
  title: 'Common/Antd/Antd.CheckboxGroup',
  component: Antd.CheckboxGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '클래스명',
    },
    defaultValue: {
      control: 'object',
      description: '기본 선택된 값 배열(string[])',
    },
    disabled: {
      control: 'boolean',
      description: '그룹 전체 비활성화 여부',
    },
    name: {
      control: 'text',
      description: 'name 속성',
    },
    options: {
      control: 'object',
      description: '옵션 배열(string[] | number[] | Option[])',
    },
    value: {
      control: 'object',
      description: '선택된 값 배열(string[])',
    },
    onChange: {
      action: 'changed',
      description: '변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Antd.CheckboxGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Antd.CheckboxGroup defaultValue={['Apple']}>
      <Antd.Checkbox value="Apple">Apple</Antd.Checkbox>
      <Antd.Checkbox value="Pear">Pear</Antd.Checkbox>
      <Antd.Checkbox value="Orange">Orange</Antd.Checkbox>
    </Antd.CheckboxGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Antd.CheckboxGroup disabled defaultValue={['Apple']}>
      <Antd.Checkbox value="Apple">Apple</Antd.Checkbox>
      <Antd.Checkbox value="Pear">Pear</Antd.Checkbox>
      <Antd.Checkbox value="Orange">Orange</Antd.Checkbox>
    </Antd.CheckboxGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Antd.CheckboxGroup defaultValue={['Apple']}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Antd.Checkbox value="Apple">Apple</Antd.Checkbox>
        <Antd.Checkbox value="Pear">Pear</Antd.Checkbox>
        <Antd.Checkbox value="Orange">Orange</Antd.Checkbox>
      </div>
    </Antd.CheckboxGroup>
  ),
}

export const WithOptions: Story = {
  render: () => (
    <Antd.CheckboxGroup
      options={[
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ]}
      defaultValue={['Apple']}
    />
  ),
}

export const WithIndeterminate: Story = {
  render: () => {
    const options = ['Apple', 'Pear', 'Orange']
    const [checkedList, setCheckedList] = React.useState<string[]>(['Apple'])
    const [indeterminate, setIndeterminate] = React.useState(true)
    const [checkAll, setCheckAll] = React.useState(false)

    const onChange = (list: CheckboxValueType[]) => {
      setCheckedList(list as string[])
      setIndeterminate(!!list.length && list.length < options.length)
      setCheckAll(list.length === options.length)
    }

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
      setCheckedList(e.target.checked ? options : [])
      setIndeterminate(false)
      setCheckAll(e.target.checked)
    }

    return (
      <>
        <Antd.Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          Check all
        </Antd.Checkbox>
        <br />
        <Antd.CheckboxGroup value={checkedList} onChange={onChange} style={{ marginTop: '8px' }}>
          {options.map((option) => (
            <Antd.Checkbox key={option} value={option}>
              {option}
            </Antd.Checkbox>
          ))}
        </Antd.CheckboxGroup>
      </>
    )
  },
}
