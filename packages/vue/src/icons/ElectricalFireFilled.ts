// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricalFireFilledSvg from '@colelab/icons-svg/es/asn/ElectricalFireFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricalFireFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricalFireFilledSvg }, slots);
  },
});
