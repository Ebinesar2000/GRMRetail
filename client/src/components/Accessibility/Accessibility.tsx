import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Card } from 'antd';
import { AccessibilityIcon } from 'lucide-react';

type Theme = 'default' | 'dark' | 'high-contrast' | 'yellow-black' | 'black-yellow';

const Accessibility: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const setTheme = (theme: Theme) => {
    const body = document.body;
    
    // Remove all theme classes
    body.classList.remove('dark', 'theme-high-contrast', 'theme-yellow-black', 'theme-black-yellow');
    
    // Apply new theme
    if (theme === 'dark') {
      body.classList.add('dark');
    } else if (theme !== 'default') {
      body.classList.add(`theme-${theme}`);
    }
    
    setCurrentTheme(theme);
  };

  const themes = [
    { key: 'default', label: t('accessibility.default'), className: '' },
    { key: 'dark', label: t('accessibility.dark'), className: 'bg-gray-800 text-white' },
    { key: 'high-contrast', label: t('accessibility.high_contrast'), className: 'bg-black text-white' },
    { key: 'yellow-black', label: t('accessibility.yellow_black'), className: 'bg-yellow-400 text-black' },
    { key: 'black-yellow', label: t('accessibility.black_yellow'), className: 'bg-black text-yellow-400' },
  ];

  return (
    <div className={`accessibility-panel ${isOpen ? 'open' : ''}`}>
      <Button 
        className="accessibility-toggle"
        onClick={togglePanel}
        icon={<AccessibilityIcon size={20} />}
      />
      <Card className="m-0 border-0">
        <h3 className="text-lg font-semibold mb-4">{t('accessibility.title')}</h3>
        <div className="space-y-2">
          {themes.map((theme) => (
            <Button
              key={theme.key}
              onClick={() => setTheme(theme.key as Theme)}
              className={`w-full text-left ${theme.className} ${
                currentTheme === theme.key ? 'ring-2 ring-blue-500' : ''
              }`}
              type={currentTheme === theme.key ? 'primary' : 'default'}
            >
              {theme.label}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Accessibility;
