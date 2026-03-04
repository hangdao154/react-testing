import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'Javascript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)

    const startLearningButton = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      {
        timeout: 2000,
      },
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})

/**
 * * NOTES: TextMatch
 *  - The first argument passed to RTL queries
 *  - It can be a string, a regex, or a function
 * ! EG: TextMatch - string <div>Hello World</div>
 * screen.getByText("Hello World")
 * screen.getByText("llo Worl", { exact: false })
 * screen.getByText("hello world", { exact: false })
 * ! EG: TextMatch - regex <div>Hello World</div>
 * screen.getByText(/World/) -> Substring match
 * screen.getByText(/world/i) -> Substring match, ignore case
 * screen.getByText(/^hello world$/i) -> Full string match, ignore case
 * ! EG: TextMatch - function (content?: string, element?: Element | null) => boolean
 * screen.getByText((content) => content.startsWith("Hello"))
 */

/**
 * * NOTES: queryBy
 * - Returns the matching node for a query, and return null if no elements match
 * - Useful for asserting an element that is not present
 * - Throws error if more than match is found
 * * NOTES: queryAllBy
 * - Returns an array of all matching nodes for a query, and return an empty array if no elements match
 */

/**
 * * NOTES: findBy
 * - Returns a Promise which resolves when an element is found which matches the query
 * - The Promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
 * * NOTES: findAllBy
 * - Returns a Promise which resolves to an array of elements when any elements are found which match the query
 * - The Promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms
 */

/**
 * * NOTES: Manual queries
 * const { container } = render(<MyComponent />);
 * const foo = container.querySelector('[data-foo]="bar"');
 */
