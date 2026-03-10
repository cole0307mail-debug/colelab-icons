// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TimeMachineOutlinedSvg from '@colelab/icons-svg/es/asn/TimeMachineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TimeMachineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TimeMachineOutlinedSvg }, slots);
  },
});
