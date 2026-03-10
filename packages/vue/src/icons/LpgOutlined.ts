// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LpgOutlinedSvg from '@colelab/icons-svg/es/asn/LpgOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LpgOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LpgOutlinedSvg }, slots);
  },
});
