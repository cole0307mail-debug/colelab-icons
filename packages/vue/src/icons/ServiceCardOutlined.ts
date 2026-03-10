// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ServiceCardOutlinedSvg from '@colelab/icons-svg/es/asn/ServiceCardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ServiceCardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ServiceCardOutlinedSvg }, slots);
  },
});
