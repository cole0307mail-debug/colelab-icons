// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TimingPointOutlinedSvg from '@colelab/icons-svg/es/asn/TimingPointOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TimingPointOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TimingPointOutlinedSvg }, slots);
  },
});
