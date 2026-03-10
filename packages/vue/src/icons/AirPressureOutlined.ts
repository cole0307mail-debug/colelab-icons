// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AirPressureOutlinedSvg from '@colelab/icons-svg/es/asn/AirPressureOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AirPressureOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AirPressureOutlinedSvg }, slots);
  },
});
