import '@testing-library/jest-dom'
import { queryClient } from './service/queryClient'
import { enUSTranslations } from './i18n'

beforeEach(() => {
  queryClient.clear()
})

const mockLanguage = enUSTranslations
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string): string => {
      const entries = Object.entries(mockLanguage)
      const entryIndex = entries.findIndex((entry) => entry[0] === key)
      const text = entryIndex !== -1 ? entries[entryIndex][1] : ''

      return text ?? ''
    },
    i18n: { changeLanguage: jest.fn() },
  }),
}))
