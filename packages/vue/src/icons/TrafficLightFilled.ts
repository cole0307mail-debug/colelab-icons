// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TrafficLightFilledSvg from '@colelab/icons-svg/es/asn/TrafficLightFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TrafficLightFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TrafficLightFilledSvg }, slots);
  },
});
