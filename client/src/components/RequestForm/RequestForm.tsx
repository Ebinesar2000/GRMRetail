import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Radio, Select, DatePicker, InputNumber, Button, Row, Col, Card } from 'antd';
import { SearchOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { RequestFormData, TripType, TripSegment } from './RequestForm.types';

const { Option } = Select;

const RequestForm: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [tripType, setTripType] = useState<TripType>('oneway');
  const [segments, setSegments] = useState<TripSegment[]>([
    { from: '', to: '', departureDate: '' }
  ]);

  const cityOptions = [
    { value: 'NYC', label: 'New York (NYC)' },
    { value: 'LAX', label: 'Los Angeles (LAX)' },
    { value: 'CHI', label: 'Chicago (CHI)' },
    { value: 'LAS', label: 'Las Vegas (LAS)' },
    { value: 'MIA', label: 'Miami (MIA)' },
    { value: 'SEA', label: 'Seattle (SEA)' },
  ];

  const handleTripTypeChange = (value: TripType) => {
    setTripType(value);
    if (value === 'multicity' && segments.length < 2) {
      setSegments([...segments, { from: '', to: '', departureDate: '' }]);
    }
  };

  const addSegment = () => {
    setSegments([...segments, { from: '', to: '', departureDate: '' }]);
  };

  const removeSegment = (index: number) => {
    if (segments.length > 2) {
      const newSegments = segments.filter((_, i) => i !== index);
      setSegments(newSegments);
    }
  };

  const handleSearchFlights = () => {
    form.validateFields().then((values) => {
      console.log('Search flights:', values);
    });
  };

  return (
    <div className="cls-card cls-overflow-hidden">
      <div className="cls-p-6 cls-bg-white">
        <h2 className="cls-text-2xl cls-font-bold cls-mb-2 cls-text-gray-800">{t('booking.title')}</h2>
        <p className="cls-text-base cls-text-gray-600">{t('booking.subtitle')}</p>
      </div>
      <div className="cls-p-6 cls-bg-white">
        <Form form={form} layout="vertical">
          <div className="mb-6">
            <Radio.Group 
              value={tripType} 
              onChange={(e) => handleTripTypeChange(e.target.value)}
            >
              <Radio value="oneway">{t('booking.one_way')}</Radio>
              <Radio value="roundtrip">{t('booking.round_trip')}</Radio>
              <Radio value="multicity">{t('booking.multi_city')}</Radio>
            </Radio.Group>
          </div>

          {tripType === 'multicity' ? (
            <div className="space-y-4 mb-6">
              {segments.map((segment, index) => (
                <Row gutter={16} key={index} className="items-end">
                  <Col span={6}>
                    <Form.Item 
                      label={index === 0 ? t('booking.origin') : `${t('booking.origin')} ${index + 1}`}
                      name={['segments', index, 'from']}
                    >
                      <Select placeholder={t('booking.origin_placeholder')}>
                        {cityOptions.map(city => (
                          <Option key={city.value} value={city.value}>{city.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item 
                      label={index === 0 ? t('booking.destination') : `${t('booking.destination')} ${index + 1}`}
                      name={['segments', index, 'to']}
                    >
                      <Select placeholder={t('booking.destination_placeholder')}>
                        {cityOptions.map(city => (
                          <Option key={city.value} value={city.value}>{city.label}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item 
                      label={t('booking.departure_date')}
                      name={['segments', index, 'departureDate']}
                    >
                      <DatePicker className="w-full" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    {index === segments.length - 1 ? (
                      <Button type="dashed" onClick={addSegment} icon={<PlusOutlined />}>
                        Add Segment
                      </Button>
                    ) : segments.length > 2 && (
                      <Button 
                        type="dashed" 
                        danger 
                        onClick={() => removeSegment(index)}
                        icon={<MinusOutlined />}
                      >
                        Remove
                      </Button>
                    )}
                  </Col>
                </Row>
              ))}
            </div>
          ) : (
            <Row gutter={16} className="mb-6">
              <Col span={6}>
                <Form.Item 
                  label={t('booking.origin')} 
                  name="origin"
                  rules={[{ required: true, message: t('booking.required') }]}
                >
                  <Select placeholder={t('booking.origin_placeholder')}>
                    {cityOptions.map(city => (
                      <Option key={city.value} value={city.value}>{city.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item 
                  label={t('booking.destination')} 
                  name="destination"
                  rules={[{ required: true, message: t('booking.required') }]}
                >
                  <Select placeholder={t('booking.destination_placeholder')}>
                    {cityOptions.map(city => (
                      <Option key={city.value} value={city.value}>{city.label}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item 
                  label={t('booking.departure_date')} 
                  name="departureDate"
                  rules={[{ required: true, message: t('booking.required') }]}
                >
                  <DatePicker className="cls-w-full" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item 
                  label={t('booking.return_date')} 
                  name="returnDate"
                  rules={[{ required: tripType === 'roundtrip', message: t('booking.required') }]}
                >
                  <DatePicker 
                    className="cls-w-full" 
                    disabled={tripType === 'oneway'}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}

          <Row gutter={16} className="cls-mb-6" align="bottom">
            <Col span={3}>
              <Form.Item 
                label={t('booking.adults')} 
                name="adults" 
                initialValue={2}
                rules={[{ required: true, message: t('booking.required') }]}
              >
                <InputNumber 
                  min={1} 
                  className="cls-passenger-input" 
                  placeholder="Adults (12+ years)"
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item 
                label={t('booking.kids')} 
                name="kids" 
                initialValue={0}
                rules={[{ required: true, message: t('booking.required') }]}
              >
                <InputNumber 
                  min={0} 
                  className="cls-passenger-input" 
                  placeholder="Kids (2-12 years)"
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item 
                label={t('booking.infants')} 
                name="infants" 
                initialValue={0}
                rules={[{ required: true, message: t('booking.required') }]}
              >
                <InputNumber 
                  min={0} 
                  className="cls-passenger-input" 
                  placeholder="Infants (0-2 years)"
                />
              </Form.Item>
            </Col>
            <Col span={3}>
              <Form.Item 
                label={t('booking.cabin')} 
                name="cabin" 
                initialValue="economy"
                rules={[{ required: true, message: t('booking.required') }]}
              >
                <Select className="cls-w-full">
                  <Option value="economy">{t('booking.economy')}</Option>
                  <Option value="business">{t('booking.business')}</Option>
                  <Option value="first">{t('booking.first')}</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12} className="cls-flex cls-flex-center">
              <Button 
                type="primary" 
                size="large"
                icon={<SearchOutlined />}
                onClick={handleSearchFlights}
                className="cls-btn cls-btn-primary cls-w-full"
                style={{ height: '48px', fontSize: '16px' }}
              >
                {t('booking.get_fares')}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default RequestForm;
