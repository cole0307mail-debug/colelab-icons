// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinTemperatureOutlinedSvg from '@colelab/icons-svg/es/asn/MinTemperatureOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinTemperatureOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinTemperatureOutlinedSvg }, slots);
  },
});
