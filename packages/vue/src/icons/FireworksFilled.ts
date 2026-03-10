// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireworksFilledSvg from '@colelab/icons-svg/es/asn/FireworksFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireworksFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireworksFilledSvg }, slots);
  },
});
