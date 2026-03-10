// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudioMutedOutlinedSvg from '@colelab/icons-svg/es/asn/AudioMutedOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudioMutedOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudioMutedOutlinedSvg }, slots);
  },
});
