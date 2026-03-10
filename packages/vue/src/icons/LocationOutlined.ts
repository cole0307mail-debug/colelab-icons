// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LocationOutlinedSvg from '@colelab/icons-svg/es/asn/LocationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LocationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LocationOutlinedSvg }, slots);
  },
});
