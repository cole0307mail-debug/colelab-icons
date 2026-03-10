// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoCarPurelySvg from '@colelab/icons-svg/es/asn/NoCarPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoCarPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoCarPurelySvg }, slots);
  },
});
