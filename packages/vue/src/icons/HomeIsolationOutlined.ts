// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HomeIsolationOutlinedSvg from '@colelab/icons-svg/es/asn/HomeIsolationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HomeIsolationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HomeIsolationOutlinedSvg }, slots);
  },
});
