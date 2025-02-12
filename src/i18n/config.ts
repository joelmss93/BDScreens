import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { resources } from './index'

const applicationEnvironment = 'development'
// const applicationEnvironment = process.env.APPLICATION_ENVIRONMENT

applicationEnvironment === 'development'
  ? i18n.use(initReactI18next).use(LanguageDetector).init({
      debug: true,
      fallbackLng: 'en-US',
      resources,
    })
  : i18n.use(initReactI18next).use(LanguageDetector).init({
      fallbackLng: 'en-US',
      resources,
    })

export default i18n
