// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BurningPointOutlinedSvg from '@colelab/icons-svg/es/asn/BurningPointOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BurningPointOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BurningPointOutlinedSvg }, slots);
  },
});
