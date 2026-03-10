// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BackwardOutlinedSvg from '@colelab/icons-svg/es/asn/BackwardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BackwardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BackwardOutlinedSvg }, slots);
  },
});
