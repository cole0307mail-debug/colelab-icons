// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudioFilledSvg from '@colelab/icons-svg/es/asn/AudioFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudioFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudioFilledSvg }, slots);
  },
});
