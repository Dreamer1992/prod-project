import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider'

// shared
import i18nForTests from 'shared/config/i18n/i18nForTests'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<IStateSchema>
}

export function componentRender(
  component: React.ReactNode,
  options: componentRenderOptions = {}
) {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>,
      </StoreProvider>
    </MemoryRouter>
  )
}
