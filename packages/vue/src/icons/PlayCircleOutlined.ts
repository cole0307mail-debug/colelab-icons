// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlayCircleOutlinedSvg from '@colelab/icons-svg/es/asn/PlayCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlayCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlayCircleOutlinedSvg }, slots);
  },
});
