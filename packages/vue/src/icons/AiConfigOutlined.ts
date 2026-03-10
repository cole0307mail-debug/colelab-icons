// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AiConfigOutlinedSvg from '@colelab/icons-svg/es/asn/AiConfigOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AiConfigOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AiConfigOutlinedSvg }, slots);
  },
});
