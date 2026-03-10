// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GeologicalDisastersOutlinedSvg from '@colelab/icons-svg/es/asn/GeologicalDisastersOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GeologicalDisastersOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GeologicalDisastersOutlinedSvg }, slots);
  },
});
