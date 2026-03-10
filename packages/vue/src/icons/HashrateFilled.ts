// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HashrateFilledSvg from '@colelab/icons-svg/es/asn/HashrateFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HashrateFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HashrateFilledSvg }, slots);
  },
});
