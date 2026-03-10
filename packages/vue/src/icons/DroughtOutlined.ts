// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroughtOutlinedSvg from '@colelab/icons-svg/es/asn/DroughtOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroughtOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroughtOutlinedSvg }, slots);
  },
});
