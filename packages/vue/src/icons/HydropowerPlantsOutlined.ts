// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HydropowerPlantsOutlinedSvg from '@colelab/icons-svg/es/asn/HydropowerPlantsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HydropowerPlantsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HydropowerPlantsOutlinedSvg }, slots);
  },
});
