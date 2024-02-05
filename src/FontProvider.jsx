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
        document.body.style.fontFamily = 'Yu Mincho Regular, Kozuka Gothic Pr6N, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, MS PGothic, メイリオ, Meiryo, ＭＳ Ｐゴシック';
        break;
      // Add more cases for other languages
      default:
        document.body.style.fontFamily = 'DefaultFont, sans-serif';
    }
  }, [i18n.language]);

  return <>{children}</>;
};

export default FontProvider;