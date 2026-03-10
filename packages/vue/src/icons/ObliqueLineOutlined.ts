// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ObliqueLineOutlinedSvg from '@colelab/icons-svg/es/asn/ObliqueLineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ObliqueLineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ObliqueLineOutlinedSvg }, slots);
  },
});
