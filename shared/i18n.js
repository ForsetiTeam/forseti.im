/**
 * This will setup the i18n language files and locale data for your app.
 */
import { addLocaleData } from 'react-intl'

import enLocaleData from 'react-intl/locale-data/en'
import ruLocaleData from 'react-intl/locale-data/ru'

import enTranslationMessages from './translations/en.json'
import ruTranslationMessages from './translations/ru.json'


const appLocales = ['en', 'ru']

addLocaleData(enLocaleData)
addLocaleData(ruLocaleData)


const formatTranslationMessages = (messages, dev) => {
  const formattedMessages = {}
  for (const message of messages) {
    formattedMessages[message.id] = dev ? message.message : message.message || message.defaultMessage
  }

  return formattedMessages
}

const translationDevMessages = {
  en: formatTranslationMessages(enTranslationMessages, true),
  ru: formatTranslationMessages(ruTranslationMessages, true),
}

const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  ru: formatTranslationMessages(ruTranslationMessages),
}


export {
  appLocales,
  translationMessages,
  translationDevMessages,
  formatTranslationMessages
}
