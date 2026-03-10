// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricityMeterOutlinedSvg from '@colelab/icons-svg/es/asn/ElectricityMeterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricityMeterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricityMeterOutlinedSvg }, slots);
  },
});
