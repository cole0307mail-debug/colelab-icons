// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DirectedFlightOutlinedSvg from '@colelab/icons-svg/es/asn/DirectedFlightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DirectedFlightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DirectedFlightOutlinedSvg }, slots);
  },
});
