import { fireEvent, screen } from '@testing-library/react'

// shared
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

// widgets
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('Sidebar', () => {
  test('with only first param', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('test toggle', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})