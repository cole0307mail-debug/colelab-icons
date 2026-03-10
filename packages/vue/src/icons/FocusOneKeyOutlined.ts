// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FocusOneKeyOutlinedSvg from '@colelab/icons-svg/es/asn/FocusOneKeyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FocusOneKeyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FocusOneKeyOutlinedSvg }, slots);
  },
});
