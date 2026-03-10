// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BeverageFilledSvg from '@colelab/icons-svg/es/asn/BeverageFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BeverageFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BeverageFilledSvg }, slots);
  },
});
