// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KeyboardOutlinedSvg from '@colelab/icons-svg/es/asn/KeyboardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KeyboardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KeyboardOutlinedSvg }, slots);
  },
});
