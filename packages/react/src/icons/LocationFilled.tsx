// This icon file is generated automatically.
import * as React from 'react';
import LocationFilledSvg from '@colelab/icons-svg/es/asn/LocationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LocationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LocationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LocationFilled);

RefIcon.displayName = 'LocationFilled';

export default RefIcon;
