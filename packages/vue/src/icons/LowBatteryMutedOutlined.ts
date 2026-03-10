// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LowBatteryMutedOutlinedSvg from '@colelab/icons-svg/es/asn/LowBatteryMutedOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LowBatteryMutedOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LowBatteryMutedOutlinedSvg }, slots);
  },
});
