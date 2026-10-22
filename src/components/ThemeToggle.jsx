import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const Icon = theme === 'dark' ? FaSun : FaMoon

  return (
    <button
      className='theme-toggle'
      type='button'
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <Icon aria-hidden='true' />
    </button>
  )
}

export default ThemeToggle
