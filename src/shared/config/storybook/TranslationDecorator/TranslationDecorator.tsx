import { Suspense } from 'react'
import { Story } from '@storybook/react'

import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18n'

export const TranslationDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<div>loading translations...</div>}>
    <I18nextProvider i18n={i18n}>
      <StoryComponent />
    </I18nextProvider>
  </Suspense>
)
