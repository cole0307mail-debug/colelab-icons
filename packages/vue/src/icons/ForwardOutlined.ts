// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ForwardOutlinedSvg from '@colelab/icons-svg/es/asn/ForwardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ForwardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ForwardOutlinedSvg }, slots);
  },
});
