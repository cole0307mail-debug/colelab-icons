// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlaneFilledSvg from '@colelab/icons-svg/es/asn/PlaneFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlaneFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlaneFilledSvg }, slots);
  },
});
