// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TimeCircleFilledSvg from '@colelab/icons-svg/es/asn/TimeCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TimeCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TimeCircleFilledSvg }, slots);
  },
});
