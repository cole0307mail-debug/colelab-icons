// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TimeCircleOutlinedSvg from '@colelab/icons-svg/es/asn/TimeCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TimeCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TimeCircleOutlinedSvg }, slots);
  },
});
