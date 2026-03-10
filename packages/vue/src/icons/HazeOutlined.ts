// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HazeOutlinedSvg from '@colelab/icons-svg/es/asn/HazeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HazeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HazeOutlinedSvg }, slots);
  },
});
