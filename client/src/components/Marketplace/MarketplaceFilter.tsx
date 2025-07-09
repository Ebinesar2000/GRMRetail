import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, DatePicker, InputNumber, Select, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { MarketplaceFilter } from './Marketplace.types';

const { Option } = Select;

interface MarketplaceFilterProps {
  onSearch: (filters: MarketplaceFilter) => void;
  onReset: () => void;
}

const MarketplaceFilterComponent: React.FC<MarketplaceFilterProps> = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const handleSearch = () => {
    form.validateFields().then((values) => {
      onSearch(values);
    });
  };

  const handleReset = () => {
    form.resetFields();
    onReset();
  };

  const originOptions = [
    { value: '', label: 'Any Origin' },
    { value: 'New York', label: 'New York' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Miami', label: 'Miami' },
    { value: 'Denver', label: 'Denver' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Boston', label: 'Boston' }
  ];

  const destinationOptions = [
    { value: '', label: 'Any Destination' },
    { value: 'London', label: 'London' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Santorini', label: 'Santorini' },
    { value: 'Zurich', label: 'Zurich' },
    { value: 'Tokyo', label: 'Tokyo' },
    { value: 'Barcelona', label: 'Barcelona' }
  ];

  return (
    <div className="cls-marketplace-filter">
      <h3 className="cls-text-lg cls-font-semibold cls-mb-4">{t('marketplace.search_packages')}</h3>
      <Form form={form} layout="vertical">
        <Row gutter={16} className="cls-mb-4">
          <Col span={6}>
            <Form.Item label="Origin" name="origin">
              <Select placeholder="Select origin">
                {originOptions.map(option => (
                  <Option key={option.value} value={option.value}>{option.label}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={t('marketplace.destination')} name="destination">
              <Select placeholder="Select destination">
                {destinationOptions.map(option => (
                  <Option key={option.value} value={option.value}>{option.label}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={t('marketplace.travel_date')} name="travelDate">
              <DatePicker className="cls-w-full" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label={t('marketplace.passengers')} name="passengers">
              <InputNumber placeholder="How many?" min={1} className="cls-w-full" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16} className="cls-mb-4">
          <Col span={6}>
            <Form.Item label={t('marketplace.package_type')} name="packageType" initialValue="all">
              <Select>
                <Option value="all">{t('marketplace.all_packages')}</Option>
                <Option value="luxury">{t('marketplace.luxury')}</Option>
                <Option value="adventure">{t('marketplace.adventure')}</Option>
                <Option value="family">{t('marketplace.family')}</Option>
                <Option value="business">{t('marketplace.business')}</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <div className="cls-flex cls-gap-4" style={{ paddingTop: '30px' }}>
              <Button 
                type="primary" 
                icon={<SearchOutlined />}
                onClick={handleSearch}
                className="cls-btn cls-btn-primary"
              >
                {t('marketplace.search_packages_btn')}
              </Button>
              <Button onClick={handleReset} className="cls-btn cls-btn-secondary">
                {t('marketplace.reset_filters')}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default MarketplaceFilterComponent;
