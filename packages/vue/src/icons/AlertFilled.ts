// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlertFilledSvg from '@colelab/icons-svg/es/asn/AlertFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlertFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlertFilledSvg }, slots);
  },
});
