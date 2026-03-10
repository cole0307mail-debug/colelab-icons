// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KeyAreaOutlinedSvg from '@colelab/icons-svg/es/asn/KeyAreaOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KeyAreaOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KeyAreaOutlinedSvg }, slots);
  },
});
