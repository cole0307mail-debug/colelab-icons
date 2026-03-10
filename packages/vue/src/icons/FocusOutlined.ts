// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FocusOutlinedSvg from '@colelab/icons-svg/es/asn/FocusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FocusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FocusOutlinedSvg }, slots);
  },
});
