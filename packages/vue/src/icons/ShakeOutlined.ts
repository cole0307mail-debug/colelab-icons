// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShakeOutlinedSvg from '@colelab/icons-svg/es/asn/ShakeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShakeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShakeOutlinedSvg }, slots);
  },
});
