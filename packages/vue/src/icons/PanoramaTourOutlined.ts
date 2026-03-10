// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PanoramaTourOutlinedSvg from '@colelab/icons-svg/es/asn/PanoramaTourOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PanoramaTourOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PanoramaTourOutlinedSvg }, slots);
  },
});
