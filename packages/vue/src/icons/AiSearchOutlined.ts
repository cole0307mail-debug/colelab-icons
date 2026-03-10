// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AiSearchOutlinedSvg from '@colelab/icons-svg/es/asn/AiSearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AiSearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AiSearchOutlinedSvg }, slots);
  },
});
