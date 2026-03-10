// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CourierServiceOutlinedSvg from '@colelab/icons-svg/es/asn/CourierServiceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CourierServiceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CourierServiceOutlinedSvg }, slots);
  },
});
