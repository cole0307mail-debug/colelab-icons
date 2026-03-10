// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BigScreenOutlinedSvg from '@colelab/icons-svg/es/asn/BigScreenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BigScreenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BigScreenOutlinedSvg }, slots);
  },
});
