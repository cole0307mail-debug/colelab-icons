// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StayRightOutlinedSvg from '@colelab/icons-svg/es/asn/StayRightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StayRightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StayRightOutlinedSvg }, slots);
  },
});
