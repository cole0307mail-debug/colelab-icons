// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ClimbOutlinedSvg from '@colelab/icons-svg/es/asn/ClimbOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ClimbOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ClimbOutlinedSvg }, slots);
  },
});
