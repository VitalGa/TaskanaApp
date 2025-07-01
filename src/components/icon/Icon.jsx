import SunIcon from './icons/themeToggleIcons/SunIcon';
import MoonIcon from './icons/themeToggleIcons/MoonIcon';
import LogoIcon from './icons/LogoIcon';
import InboxIcon from './icons/buttonIcons/InboxIcon';
import LoadingIcon from './icons/buttonIcons/LoadingIcon';
import PlusIcon from './icons/headerIcons/plus-2-Icon';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  logo: LogoIcon,
  inbox: InboxIcon,
  loading: LoadingIcon,
  plus: PlusIcon,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
