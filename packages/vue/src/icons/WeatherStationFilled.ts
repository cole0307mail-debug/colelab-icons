// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WeatherStationFilledSvg from '@colelab/icons-svg/es/asn/WeatherStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WeatherStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WeatherStationFilledSvg }, slots);
  },
});
