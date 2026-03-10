// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricalFireOutlinedSvg from '@colelab/icons-svg/es/asn/ElectricalFireOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricalFireOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricalFireOutlinedSvg }, slots);
  },
});
