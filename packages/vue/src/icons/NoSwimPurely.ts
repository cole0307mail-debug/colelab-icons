// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoSwimPurelySvg from '@colelab/icons-svg/es/asn/NoSwimPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoSwimPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoSwimPurelySvg }, slots);
  },
});
