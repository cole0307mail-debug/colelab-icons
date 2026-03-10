// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WearingMaskFilledSvg from '@colelab/icons-svg/es/asn/WearingMaskFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WearingMaskFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WearingMaskFilledSvg }, slots);
  },
});
