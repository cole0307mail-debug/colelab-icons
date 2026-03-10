// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SuppliesOutlinedSvg from '@colelab/icons-svg/es/asn/SuppliesOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SuppliesOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SuppliesOutlinedSvg }, slots);
  },
});
