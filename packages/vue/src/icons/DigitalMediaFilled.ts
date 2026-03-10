// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DigitalMediaFilledSvg from '@colelab/icons-svg/es/asn/DigitalMediaFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DigitalMediaFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DigitalMediaFilledSvg }, slots);
  },
});
