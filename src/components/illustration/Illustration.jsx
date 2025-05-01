import React from 'react';
import { GirlillustrationIcon } from './illustrations/GirlIllustrationIcon';
import { BookillustrationIcon } from './illustrations/BookillustrationIcon';

const iconMap = {
  girl: GirlillustrationIcon,
  book: BookillustrationIcon,
};

const Illustration = ({ name, size = 24, className = '', ...props }) => {
  const SvgIcon = iconMap[name];
  if (!SvgIcon) return null;

  return (
    <SvgIcon
      width={size}
      height={size}
      className={className}
      {...props} // Все пропсы передаются, но без изменения значений fill
    />
  );
};

export default Illustration;
