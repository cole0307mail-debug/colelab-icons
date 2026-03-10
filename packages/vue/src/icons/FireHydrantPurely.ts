// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHydrantPurelySvg from '@colelab/icons-svg/es/asn/FireHydrantPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHydrantPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHydrantPurelySvg }, slots);
  },
});
