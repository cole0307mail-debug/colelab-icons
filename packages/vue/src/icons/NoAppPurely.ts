// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoAppPurelySvg from '@colelab/icons-svg/es/asn/NoAppPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoAppPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoAppPurelySvg }, slots);
  },
});
