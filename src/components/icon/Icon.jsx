import SunIcon from './icons/themeToggleIcons/SunIcon';
import MoonIcon from './icons/themeToggleIcons/MoonIcon';
import LogoIcon from './icons/LogoIcon';
import InboxIcon from './icons/buttonIcons/inboxIcon';
import { useTheme } from '@/context/ThemeContext';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  logo: LogoIcon,
  inbox: InboxIcon,
};

const Icon = ({ name, fill, ...props }) => {
  const { theme } = useTheme();
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  // Если fill не указан, используем цвет в зависимости от темы
  const iconFill = fill || (theme === 'light' ? '#000000' : '#FFFFFF');

  return <IconComponent fill={iconFill} {...props} />;
};

export default Icon;
