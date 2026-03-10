// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SupplyPointOutlinedSvg from '@colelab/icons-svg/es/asn/SupplyPointOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SupplyPointOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SupplyPointOutlinedSvg }, slots);
  },
});
