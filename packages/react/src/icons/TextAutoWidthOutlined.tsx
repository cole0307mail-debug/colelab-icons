// This icon file is generated automatically.
import * as React from 'react';
import TextAutoWidthOutlinedSvg from '@colelab/icons-svg/es/asn/TextAutoWidthOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TextAutoWidthOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TextAutoWidthOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TextAutoWidthOutlined);

RefIcon.displayName = 'TextAutoWidthOutlined';

export default RefIcon;
