// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ModerateRainFilledSvg from '@colelab/icons-svg/es/asn/ModerateRainFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ModerateRainFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ModerateRainFilledSvg }, slots);
  },
});
