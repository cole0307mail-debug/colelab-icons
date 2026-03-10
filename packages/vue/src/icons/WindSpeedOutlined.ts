// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WindSpeedOutlinedSvg from '@colelab/icons-svg/es/asn/WindSpeedOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WindSpeedOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WindSpeedOutlinedSvg }, slots);
  },
});
