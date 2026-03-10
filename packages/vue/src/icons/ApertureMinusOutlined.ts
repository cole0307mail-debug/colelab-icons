// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ApertureMinusOutlinedSvg from '@colelab/icons-svg/es/asn/ApertureMinusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ApertureMinusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ApertureMinusOutlinedSvg }, slots);
  },
});
