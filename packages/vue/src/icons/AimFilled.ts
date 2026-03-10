// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AimFilledSvg from '@colelab/icons-svg/es/asn/AimFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AimFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AimFilledSvg }, slots);
  },
});
