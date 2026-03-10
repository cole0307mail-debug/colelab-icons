// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TetrisOutlinedSvg from '@colelab/icons-svg/es/asn/TetrisOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TetrisOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TetrisOutlinedSvg }, slots);
  },
});
