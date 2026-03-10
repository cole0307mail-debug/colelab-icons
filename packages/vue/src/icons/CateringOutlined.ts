// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CateringOutlinedSvg from '@colelab/icons-svg/es/asn/CateringOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CateringOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CateringOutlinedSvg }, slots);
  },
});
