// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricCarPurelySvg from '@colelab/icons-svg/es/asn/ElectricCarPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricCarPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricCarPurelySvg }, slots);
  },
});
