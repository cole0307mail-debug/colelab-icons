// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CallVideoFilledSvg from '@colelab/icons-svg/es/asn/CallVideoFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CallVideoFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CallVideoFilledSvg }, slots);
  },
});
