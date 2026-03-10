// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasAlarmFilledSvg from '@colelab/icons-svg/es/asn/GasAlarmFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasAlarmFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasAlarmFilledSvg }, slots);
  },
});
