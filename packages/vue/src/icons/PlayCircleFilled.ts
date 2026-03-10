// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlayCircleFilledSvg from '@colelab/icons-svg/es/asn/PlayCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlayCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlayCircleFilledSvg }, slots);
  },
});
