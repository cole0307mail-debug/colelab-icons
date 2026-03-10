// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KeyOutlinedSvg from '@colelab/icons-svg/es/asn/KeyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KeyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KeyOutlinedSvg }, slots);
  },
});
