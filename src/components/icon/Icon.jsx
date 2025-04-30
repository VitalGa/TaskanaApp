import SunIcon from './icons/themeToggleIcons/SunIcon';
import MoonIcon from './icons/themeToggleIcons/MoonIcon';
import LogoIcon from './icons/LogoIcon';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  logo: LogoIcon,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
