import React, { FC } from 'react';
import Icons from '../../assets/sprite.svg';

export enum IconsSprite {
  MENU = 'menu',
  CLOSE = 'close',
}

type IconsProps = {
  id: IconsSprite;
  color?: string;
  size?: string;
} & React.HTMLAttributes<SVGElement>;

const IconsSvg: FC<IconsProps> = ({ id, color = 'white', size = '1rem' }) => {
  return (
    <svg className="icons-sprite" fill={color} width={size} height={size}>
      <use href={`${Icons}#${id}`} />
    </svg>
  );
};

export default IconsSvg;
