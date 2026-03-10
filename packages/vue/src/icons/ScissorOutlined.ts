// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScissorOutlinedSvg from '@colelab/icons-svg/es/asn/ScissorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScissorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScissorOutlinedSvg }, slots);
  },
});
