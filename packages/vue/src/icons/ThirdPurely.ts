// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ThirdPurelySvg from '@colelab/icons-svg/es/asn/ThirdPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ThirdPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ThirdPurelySvg }, slots);
  },
});
