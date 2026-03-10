// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SunsetOutlinedSvg from '@colelab/icons-svg/es/asn/SunsetOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SunsetOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SunsetOutlinedSvg }, slots);
  },
});
