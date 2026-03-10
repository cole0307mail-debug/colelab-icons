// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PmOutlinedSvg from '@colelab/icons-svg/es/asn/PmOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PmOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PmOutlinedSvg }, slots);
  },
});
