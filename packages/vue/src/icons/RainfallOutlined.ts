// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RainfallOutlinedSvg from '@colelab/icons-svg/es/asn/RainfallOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RainfallOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RainfallOutlinedSvg }, slots);
  },
});
