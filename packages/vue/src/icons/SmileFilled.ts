// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmileFilledSvg from '@colelab/icons-svg/es/asn/SmileFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmileFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmileFilledSvg }, slots);
  },
});
