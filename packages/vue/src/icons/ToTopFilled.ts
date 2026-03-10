// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ToTopFilledSvg from '@colelab/icons-svg/es/asn/ToTopFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ToTopFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ToTopFilledSvg }, slots);
  },
});
