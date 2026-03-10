// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StayLeftOutlinedSvg from '@colelab/icons-svg/es/asn/StayLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StayLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StayLeftOutlinedSvg }, slots);
  },
});
