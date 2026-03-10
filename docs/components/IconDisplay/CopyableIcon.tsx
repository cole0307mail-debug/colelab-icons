import React from 'react';
import { Badge } from 'antd';
import { useClipboard } from 'use-clipboard-hook';
import { classNames } from '@pansy/shared';
import * as senIcons from '@colelab/icons-react';

import { ThemeType } from './';

export interface CopyableIconProps {
  name: string;
  isNew: boolean;
  theme: ThemeType;
  onCopied: (type: string, text: string) => void;
}

export const CopyableIcon: React.FC<CopyableIconProps> = ({ name, isNew, theme, onCopied }) => {
  const { copy } = useClipboard();

  const classes = classNames({
    [theme]: !!theme,
  });

  const handleCopied = () => {
    const copyText = `import ${name} from '@colelab/icons-react/${name}';`;

    copy(copyText);
    onCopied(name, copyText);
  };

  return (
    <li className={classes} onClick={handleCopied}>
      {/* @ts-ignore */}
      {React.createElement(senIcons[name])}
      <span className="s-icon-class">
        <Badge dot={isNew}>{name}</Badge>
      </span>
    </li>
  );
};
