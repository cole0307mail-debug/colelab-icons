// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RotationFilledSvg from '@colelab/icons-svg/es/asn/RotationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RotationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RotationFilledSvg }, slots);
  },
});
