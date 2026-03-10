// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NightModeAutoOutlinedSvg from '@colelab/icons-svg/es/asn/NightModeAutoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NightModeAutoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NightModeAutoOutlinedSvg }, slots);
  },
});
