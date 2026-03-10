// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KeyPersonPurelySvg from '@colelab/icons-svg/es/asn/KeyPersonPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KeyPersonPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KeyPersonPurelySvg }, slots);
  },
});
