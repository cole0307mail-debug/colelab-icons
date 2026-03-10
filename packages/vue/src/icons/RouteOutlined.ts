// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RouteOutlinedSvg from '@colelab/icons-svg/es/asn/RouteOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RouteOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RouteOutlinedSvg }, slots);
  },
});
