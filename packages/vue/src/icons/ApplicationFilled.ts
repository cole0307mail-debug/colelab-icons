// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ApplicationFilledSvg from '@colelab/icons-svg/es/asn/ApplicationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ApplicationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ApplicationFilledSvg }, slots);
  },
});
