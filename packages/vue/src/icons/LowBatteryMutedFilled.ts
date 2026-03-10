// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LowBatteryMutedFilledSvg from '@colelab/icons-svg/es/asn/LowBatteryMutedFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LowBatteryMutedFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LowBatteryMutedFilledSvg }, slots);
  },
});
