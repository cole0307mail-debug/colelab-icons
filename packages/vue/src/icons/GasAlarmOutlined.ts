// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasAlarmOutlinedSvg from '@colelab/icons-svg/es/asn/GasAlarmOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasAlarmOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasAlarmOutlinedSvg }, slots);
  },
});
