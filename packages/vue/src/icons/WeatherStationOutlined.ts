// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WeatherStationOutlinedSvg from '@colelab/icons-svg/es/asn/WeatherStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WeatherStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WeatherStationOutlinedSvg }, slots);
  },
});
