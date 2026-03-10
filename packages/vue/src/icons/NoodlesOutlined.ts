// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoodlesOutlinedSvg from '@colelab/icons-svg/es/asn/NoodlesOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoodlesOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoodlesOutlinedSvg }, slots);
  },
});
