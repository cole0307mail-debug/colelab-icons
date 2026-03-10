// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScenicAreaFilledSvg from '@colelab/icons-svg/es/asn/ScenicAreaFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScenicAreaFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScenicAreaFilledSvg }, slots);
  },
});
