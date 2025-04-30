import SunIcon from './icons/themeToggleIcons/SunIcon';
import MoonIcon from './icons/themeToggleIcons/MoonIcon';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
};

const Icon = ({ name, color, size, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent color={color} width={size} height={size} {...props} />;
};

export default Icon;
