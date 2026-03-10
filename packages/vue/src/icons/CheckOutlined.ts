// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CheckOutlinedSvg from '@colelab/icons-svg/es/asn/CheckOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CheckOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CheckOutlinedSvg }, slots);
  },
});
