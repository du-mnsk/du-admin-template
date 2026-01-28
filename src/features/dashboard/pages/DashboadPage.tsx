import { useRef, useState } from "react"
import type { InputRef } from "antd"
import dayjs from "dayjs"

import { Antd } from "@/shared/components/du-admin-ui/Antd"

const DashboadPage = () => {
  const ref = useRef<InputRef>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs())

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date)
  }

  const handleSwitchChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  const handleCarouselChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  // return <Loading />

  return (
    <div>
      <Antd.Card title="Card title">
        <Antd.Carousel afterChange={handleCarouselChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Antd.Carousel>
        <Antd.Tag>Tag</Antd.Tag>
        <Antd.Descriptions title="User Info" bordered>
          <Antd.DescriptionsItem label="Name">John Brown</Antd.DescriptionsItem>
          <Antd.DescriptionsItem label="Age">32</Antd.DescriptionsItem>
          <Antd.DescriptionsItem label="Address">New York No. 1 Lake Park</Antd.DescriptionsItem>
        </Antd.Descriptions>
        <Antd.Tabs defaultActiveKey="1" items={items} />
        <Antd.Table dataSource={dataSource} columns={columns} />
        <Antd.Select width={'200px'} placeholder="Select an option">
          <Antd.SelectOption value="1">Option 1</Antd.SelectOption>
          <Antd.SelectOption value="2">Option 2</Antd.SelectOption>
          <Antd.SelectOption value="3">Option 3</Antd.SelectOption> 
        </Antd.Select>
        <Antd.Switch defaultChecked onChange={handleSwitchChange} />
        <Antd.Badge status="success" count={5} />
        <Antd.Button type="primary" onClick={showModal}>Button</Antd.Button>
        <Antd.Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Antd.Skeleton active />
        </Antd.Modal>
        <div style={{ marginBottom: '16px' }}>
          <Antd.DatePicker
          picker="year"
            value={selectedDate}
            onChange={handleDateChange}
            format="YYYY"
            placeholder="날짜를 선택하세요"
            style={{ width: '200px' }}
            mode="year"
          />
          {selectedDate && (
            <p style={{ marginTop: '8px', color: '#666' }}>
              선택된 날짜: {selectedDate.format('YYYY년')}
            </p>
          )}
        </div>
        <Antd.Pagination disabled />
        <Antd.Input ref={ref} />
        <Antd.Dropdown menu={{ items }}>
          <a>Hover me</a>
        </Antd.Dropdown>
        <Antd.Menu>
          <Antd.MenuItem>item 1</Antd.MenuItem>
          <Antd.MenuItem>item 2</Antd.MenuItem>
        </Antd.Menu>
        
        <Antd.Calendar value={dayjs('2025-01-01')} />
      </Antd.Card>
      
    </div>
  )
}

export default DashboadPage

const items = [
  { label: 'Tab 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'Tab 2', key: 'item-2' },
];

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};