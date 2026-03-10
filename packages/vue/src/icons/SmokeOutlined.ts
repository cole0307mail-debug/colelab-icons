// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmokeOutlinedSvg from '@colelab/icons-svg/es/asn/SmokeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmokeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmokeOutlinedSvg }, slots);
  },
});
