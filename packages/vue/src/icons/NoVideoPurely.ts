// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoVideoPurelySvg from '@colelab/icons-svg/es/asn/NoVideoPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoVideoPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoVideoPurelySvg }, slots);
  },
});
