// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TheaterOutlinedSvg from '@colelab/icons-svg/es/asn/TheaterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TheaterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TheaterOutlinedSvg }, slots);
  },
});
