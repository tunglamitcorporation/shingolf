import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const FontProvider = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Determine the language and set the font accordingly
    const lang = i18n.language;

    switch (lang) {
      case 'en':
        document.body.style.fontFamily = 'Open Sans';
        break;
      case 'ja':
        document.body.style.fontFamily = 'Yu Mincho Regular';
        break;
      case 'vie':
        document.body.style.fontFamily = 'Arial Regular';
        break;
      case 'kor':
        document.body.style.fontFamily = 'Gadugi';
        break;
      // Add more cases for other languages
      default:
        document.body.style.fontFamily = 'DefaultFont, sans-serif';
    }
  }, [i18n.language]);

  return <>{children}</>;
};

export default FontProvider;