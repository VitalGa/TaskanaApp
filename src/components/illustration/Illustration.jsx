import { GirlIllustrationIcon } from './illustrations/GirlIllustrationIcon';
import { BookIllustrationIcon } from './illustrations/BookIllustrationIcon';

const iconMap = {
  girl: GirlIllustrationIcon,
  book: BookIllustrationIcon,
};

export function Illustration({ name, size = 24, className = '', ...props }) {
  const SvgIcon = iconMap[name];
  if (!SvgIcon) return null;

  return <SvgIcon width={size} height={size} className={className} {...props} />;
}
