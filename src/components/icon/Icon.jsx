import { SunIcon, MoonIcon, LogoIcon, InboxIcon, LoadingIcon, PlusIcon } from './icons';

const icons = {
  sun: SunIcon,
  moon: MoonIcon,
  logo: LogoIcon,
  inbox: InboxIcon,
  loading: LoadingIcon,
  plus: PlusIcon,
};

function Icon({ name, ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
}

export default Icon;
