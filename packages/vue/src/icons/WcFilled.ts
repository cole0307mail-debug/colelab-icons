// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WcFilledSvg from '@colelab/icons-svg/es/asn/WcFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WcFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WcFilledSvg }, slots);
  },
});
