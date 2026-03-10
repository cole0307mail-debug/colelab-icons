// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DrawRectangleOutlinedSvg from '@colelab/icons-svg/es/asn/DrawRectangleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DrawRectangleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DrawRectangleOutlinedSvg }, slots);
  },
});
