// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExpandOutlinedSvg from '@colelab/icons-svg/es/asn/ExpandOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExpandOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExpandOutlinedSvg }, slots);
  },
});
