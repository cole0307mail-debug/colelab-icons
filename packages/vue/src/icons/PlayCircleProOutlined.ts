// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlayCircleProOutlinedSvg from '@colelab/icons-svg/es/asn/PlayCircleProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlayCircleProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlayCircleProOutlinedSvg }, slots);
  },
});
