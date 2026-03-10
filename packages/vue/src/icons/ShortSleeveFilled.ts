// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShortSleeveFilledSvg from '@colelab/icons-svg/es/asn/ShortSleeveFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShortSleeveFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShortSleeveFilledSvg }, slots);
  },
});
