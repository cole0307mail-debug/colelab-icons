// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SoundSmallOutlinedSvg from '@colelab/icons-svg/es/asn/SoundSmallOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SoundSmallOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SoundSmallOutlinedSvg }, slots);
  },
});
