// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ModerateRainOutlinedSvg from '@colelab/icons-svg/es/asn/ModerateRainOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ModerateRainOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ModerateRainOutlinedSvg }, slots);
  },
});
