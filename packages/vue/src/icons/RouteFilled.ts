// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RouteFilledSvg from '@colelab/icons-svg/es/asn/RouteFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RouteFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RouteFilledSvg }, slots);
  },
});
