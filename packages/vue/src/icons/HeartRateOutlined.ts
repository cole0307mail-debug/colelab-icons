// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeartRateOutlinedSvg from '@colelab/icons-svg/es/asn/HeartRateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeartRateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeartRateOutlinedSvg }, slots);
  },
});
