// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GeologicalDisasterFilledSvg from '@colelab/icons-svg/es/asn/GeologicalDisasterFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GeologicalDisasterFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GeologicalDisasterFilledSvg }, slots);
  },
});
