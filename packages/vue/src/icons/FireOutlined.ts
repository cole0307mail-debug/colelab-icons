// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireOutlinedSvg from '@colelab/icons-svg/es/asn/FireOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireOutlinedSvg }, slots);
  },
});
