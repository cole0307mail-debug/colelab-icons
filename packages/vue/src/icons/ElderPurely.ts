// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElderPurelySvg from '@colelab/icons-svg/es/asn/ElderPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElderPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElderPurelySvg }, slots);
  },
});
