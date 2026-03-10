// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ProhibitFilledSvg from '@colelab/icons-svg/es/asn/ProhibitFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ProhibitFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ProhibitFilledSvg }, slots);
  },
});
