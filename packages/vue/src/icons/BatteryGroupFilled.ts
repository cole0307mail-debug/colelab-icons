// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BatteryGroupFilledSvg from '@colelab/icons-svg/es/asn/BatteryGroupFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BatteryGroupFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BatteryGroupFilledSvg }, slots);
  },
});
