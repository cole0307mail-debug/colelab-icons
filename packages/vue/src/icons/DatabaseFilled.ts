// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DatabaseFilledSvg from '@colelab/icons-svg/es/asn/DatabaseFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DatabaseFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DatabaseFilledSvg }, slots);
  },
});
