// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeepThinkOutlinedSvg from '@colelab/icons-svg/es/asn/DeepThinkOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeepThinkOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeepThinkOutlinedSvg }, slots);
  },
});
