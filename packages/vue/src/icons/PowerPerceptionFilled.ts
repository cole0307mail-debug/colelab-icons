// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerPerceptionFilledSvg from '@colelab/icons-svg/es/asn/PowerPerceptionFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerPerceptionFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerPerceptionFilledSvg }, slots);
  },
});
