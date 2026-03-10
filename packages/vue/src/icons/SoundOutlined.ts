// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SoundOutlinedSvg from '@colelab/icons-svg/es/asn/SoundOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SoundOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SoundOutlinedSvg }, slots);
  },
});
