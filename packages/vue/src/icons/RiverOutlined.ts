// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RiverOutlinedSvg from '@colelab/icons-svg/es/asn/RiverOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RiverOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RiverOutlinedSvg }, slots);
  },
});
