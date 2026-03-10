// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricalFirePurelySvg from '@colelab/icons-svg/es/asn/ElectricalFirePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricalFirePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricalFirePurelySvg }, slots);
  },
});
