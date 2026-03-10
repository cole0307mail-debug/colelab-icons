// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DangerFilledSvg from '@colelab/icons-svg/es/asn/DangerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DangerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DangerFilledSvg }, slots);
  },
});
