// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EllipsisOutlinedSvg from '@colelab/icons-svg/es/asn/EllipsisOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EllipsisOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EllipsisOutlinedSvg }, slots);
  },
});
