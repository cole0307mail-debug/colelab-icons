// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NightModeOnOutlinedSvg from '@colelab/icons-svg/es/asn/NightModeOnOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NightModeOnOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NightModeOnOutlinedSvg }, slots);
  },
});
