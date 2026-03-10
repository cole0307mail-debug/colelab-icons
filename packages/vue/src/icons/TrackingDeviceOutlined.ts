// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TrackingDeviceOutlinedSvg from '@colelab/icons-svg/es/asn/TrackingDeviceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TrackingDeviceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TrackingDeviceOutlinedSvg }, slots);
  },
});
