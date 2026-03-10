// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InclinationOutlinedSvg from '@colelab/icons-svg/es/asn/InclinationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InclinationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InclinationOutlinedSvg }, slots);
  },
});
