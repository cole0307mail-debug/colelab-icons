// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DragOutlinedSvg from '@colelab/icons-svg/es/asn/DragOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DragOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DragOutlinedSvg }, slots);
  },
});
