// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHydrantFilledSvg from '@colelab/icons-svg/es/asn/FireHydrantFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHydrantFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHydrantFilledSvg }, slots);
  },
});
