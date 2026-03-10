// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VrOutlinedSvg from '@colelab/icons-svg/es/asn/VrOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VrOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VrOutlinedSvg }, slots);
  },
});
