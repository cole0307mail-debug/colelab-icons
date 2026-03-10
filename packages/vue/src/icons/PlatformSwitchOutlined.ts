// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlatformSwitchOutlinedSvg from '@colelab/icons-svg/es/asn/PlatformSwitchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlatformSwitchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlatformSwitchOutlinedSvg }, slots);
  },
});
