// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MaxTemperatureOutlinedSvg from '@colelab/icons-svg/es/asn/MaxTemperatureOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MaxTemperatureOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MaxTemperatureOutlinedSvg }, slots);
  },
});
