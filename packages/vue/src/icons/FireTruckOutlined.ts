// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireTruckOutlinedSvg from '@colelab/icons-svg/es/asn/FireTruckOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireTruckOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireTruckOutlinedSvg }, slots);
  },
});
