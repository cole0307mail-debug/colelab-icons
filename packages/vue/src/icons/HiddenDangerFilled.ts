// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HiddenDangerFilledSvg from '@colelab/icons-svg/es/asn/HiddenDangerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HiddenDangerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HiddenDangerFilledSvg }, slots);
  },
});
