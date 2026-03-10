// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MobileFilledSvg from '@colelab/icons-svg/es/asn/MobileFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MobileFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MobileFilledSvg }, slots);
  },
});
