// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TheaterFilledSvg from '@colelab/icons-svg/es/asn/TheaterFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TheaterFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TheaterFilledSvg }, slots);
  },
});
