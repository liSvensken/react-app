import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  return (
    <div>
      <div>ABOUT PAGE</div>
      <div>{ t('Мой заголовок') }</div>
    </div>
  );
};

export default AboutPage;
