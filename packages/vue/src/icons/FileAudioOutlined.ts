// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileAudioOutlinedSvg from '@colelab/icons-svg/es/asn/FileAudioOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileAudioOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileAudioOutlinedSvg }, slots);
  },
});
