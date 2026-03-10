// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BatteryOutlinedSvg from '@colelab/icons-svg/es/asn/BatteryOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BatteryOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BatteryOutlinedSvg }, slots);
  },
});
