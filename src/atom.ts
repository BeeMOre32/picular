import { atom } from 'recoil';

const currentTheme = atom<string>({
  key: 'currentTheme',
  default: 'light',
});
export default currentTheme;
