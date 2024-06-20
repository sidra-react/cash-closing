import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function Homee() {
  const { t } = useTranslation();

  const handleChangeLanguage = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <>
        <h1>
     
        {t('welcome')} {t('home')}
      </h1>
    </>
  );
}

export default Homee;
