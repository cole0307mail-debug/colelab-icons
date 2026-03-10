// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UnitOutlinedSvg from '@colelab/icons-svg/es/asn/UnitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UnitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UnitOutlinedSvg }, slots);
  },
});
