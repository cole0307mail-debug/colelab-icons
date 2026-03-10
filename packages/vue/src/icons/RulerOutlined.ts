// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RulerOutlinedSvg from '@colelab/icons-svg/es/asn/RulerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RulerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RulerOutlinedSvg }, slots);
  },
});
