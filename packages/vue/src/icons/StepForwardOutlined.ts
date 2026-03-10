// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StepForwardOutlinedSvg from '@colelab/icons-svg/es/asn/StepForwardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StepForwardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StepForwardOutlinedSvg }, slots);
  },
});
