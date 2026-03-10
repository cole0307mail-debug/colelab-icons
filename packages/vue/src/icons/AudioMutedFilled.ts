// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudioMutedFilledSvg from '@colelab/icons-svg/es/asn/AudioMutedFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudioMutedFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudioMutedFilledSvg }, slots);
  },
});
