// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PreviousOutlinedSvg from '@colelab/icons-svg/es/asn/PreviousOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PreviousOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PreviousOutlinedSvg }, slots);
  },
});
