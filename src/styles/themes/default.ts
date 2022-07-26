import { ThemeTypes } from '../../@types/Theme'

export const defaultTheme = {
  white: '#FFF',
  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'blue-300': '#81d8f7',
  'blue-400': '#5bc0de',
  'blue-500': '#2196F3',
  'blue-600': '#0c7cd5',
  'blue-700': '#0a539e',

  'green-300': '#00b37e',
  'green-500': '#00875f',
  'green-700': '#015f43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',

  [ThemeTypes.dark]: {
    accent: '#00bbcc',
    primaryText: '#ffffff',
    secondaryText: '#ccc',
    background: '#333333',
    controlBar: '#222222',
    cardBackFace: '#111111',
    cardFrontFace: '#e6e6e6'
  },
  [ThemeTypes.light]: {
    accent: '#00bbcc',
    primaryText: '#313131',
    secondaryText: '#616161',
    background: '#ffffff',
    controlBar: '#f1f1f1',
    cardBackFace: '#444444',
    cardFrontFace: '#e2e2e2'
  }
}
