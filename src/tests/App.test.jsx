import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App.jsx', () => {
  it('Renderiza sin errores', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getAllByText(/Hacking/i).length).toBeGreaterThan(0)
  })
})
