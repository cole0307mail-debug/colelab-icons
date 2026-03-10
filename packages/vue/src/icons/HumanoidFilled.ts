// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HumanoidFilledSvg from '@colelab/icons-svg/es/asn/HumanoidFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HumanoidFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HumanoidFilledSvg }, slots);
  },
});
