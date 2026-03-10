// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LayoutDownOutlinedSvg from '@colelab/icons-svg/es/asn/LayoutDownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LayoutDownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LayoutDownOutlinedSvg }, slots);
  },
});
