// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MuteOutlinedSvg from '@colelab/icons-svg/es/asn/MuteOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MuteOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MuteOutlinedSvg }, slots);
  },
});
