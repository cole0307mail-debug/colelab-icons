// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CakeOutlinedSvg from '@colelab/icons-svg/es/asn/CakeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CakeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CakeOutlinedSvg }, slots);
  },
});
