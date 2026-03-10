// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlusCircleFilledSvg from '@colelab/icons-svg/es/asn/PlusCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlusCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlusCircleFilledSvg }, slots);
  },
});
