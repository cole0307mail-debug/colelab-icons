// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NightModeOffOutlinedSvg from '@colelab/icons-svg/es/asn/NightModeOffOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NightModeOffOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NightModeOffOutlinedSvg }, slots);
  },
});
