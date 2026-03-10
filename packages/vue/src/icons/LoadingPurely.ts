// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LoadingPurelySvg from '@colelab/icons-svg/es/asn/LoadingPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LoadingPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LoadingPurelySvg }, slots);
  },
});
