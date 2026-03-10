// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StarOutlinedSvg from '@colelab/icons-svg/es/asn/StarOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StarOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StarOutlinedSvg }, slots);
  },
});
