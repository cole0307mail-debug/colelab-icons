// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShootFilledSvg from '@colelab/icons-svg/es/asn/ShootFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShootFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShootFilledSvg }, slots);
  },
});
