// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RangeHoodOutlinedSvg from '@colelab/icons-svg/es/asn/RangeHoodOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RangeHoodOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RangeHoodOutlinedSvg }, slots);
  },
});
