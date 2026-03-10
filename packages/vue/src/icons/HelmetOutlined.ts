// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HelmetOutlinedSvg from '@colelab/icons-svg/es/asn/HelmetOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HelmetOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HelmetOutlinedSvg }, slots);
  },
});
