import { GirlIllustrationIcon } from './illustrations/GirlillustrationIcon.jsx';
import { BookIllustrationIcon } from './illustrations/BookillustrationIcon.jsx';

const iconMap = {
  girl: GirlIllustrationIcon,
  book: BookIllustrationIcon,
};

export function Illustration({ name, size = 24, className = '', ...props }) {
  const SvgIcon = iconMap[name];
  if (!SvgIcon) return null;

  return <SvgIcon width={size} height={size} className={className} {...props} />;
}
