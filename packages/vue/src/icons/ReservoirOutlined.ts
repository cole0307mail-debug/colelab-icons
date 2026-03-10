// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ReservoirOutlinedSvg from '@colelab/icons-svg/es/asn/ReservoirOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ReservoirOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ReservoirOutlinedSvg }, slots);
  },
});
