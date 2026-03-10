// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AiOutlinedSvg from '@colelab/icons-svg/es/asn/AiOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AiOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AiOutlinedSvg }, slots);
  },
});
