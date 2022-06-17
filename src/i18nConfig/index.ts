import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import pluralProcessor from './pluralProcessor'
import { defaultLanguages, nss } from './langs'

const initI18n = async () => {
  const i18nInstance = await i18next
    .use(pluralProcessor)
    .use(initReactI18next)
    .init({
      lng: document.documentElement.lang,
      fallbackLng: defaultLanguages,
      lowerCaseLng: true,
      load: 'currentOnly',
      keySeparator: '=>',
      ns: nss,
      defaultNS: 'combine',
      interpolation: {
        escapeValue: false,
        prefix: '%',
        suffix: '%',
      },
      // eslint-disable-next-line no-underscore-dangle
      resources: window._translation_,
      debug: false,
    })
  return i18nInstance
}
// 因为有几个模块写法有问题，没时间改 做个兼容
const i18n = i18next

export { i18n, initI18n }
