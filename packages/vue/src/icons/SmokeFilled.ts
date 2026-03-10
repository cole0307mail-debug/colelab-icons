// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmokeFilledSvg from '@colelab/icons-svg/es/asn/SmokeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmokeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmokeFilledSvg }, slots);
  },
});
