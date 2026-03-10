// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AccompanyOutlinedSvg from '@colelab/icons-svg/es/asn/AccompanyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AccompanyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AccompanyOutlinedSvg }, slots);
  },
});
