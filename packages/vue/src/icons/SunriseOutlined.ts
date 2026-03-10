// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SunriseOutlinedSvg from '@colelab/icons-svg/es/asn/SunriseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SunriseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SunriseOutlinedSvg }, slots);
  },
});
