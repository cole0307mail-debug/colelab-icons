// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MufflingOutlinedSvg from '@colelab/icons-svg/es/asn/MufflingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MufflingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MufflingOutlinedSvg }, slots);
  },
});
