// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RecreationFilledSvg from '@colelab/icons-svg/es/asn/RecreationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RecreationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RecreationFilledSvg }, slots);
  },
});
