// This icon file is generated automatically.
import * as React from 'react';
import IncomingCallOutlinedSvg from '@colelab/icons-svg/es/asn/IncomingCallOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IncomingCallOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IncomingCallOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IncomingCallOutlined);

RefIcon.displayName = 'IncomingCallOutlined';

export default RefIcon;
