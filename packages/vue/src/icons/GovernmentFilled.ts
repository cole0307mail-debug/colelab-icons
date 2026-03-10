// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GovernmentFilledSvg from '@colelab/icons-svg/es/asn/GovernmentFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GovernmentFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GovernmentFilledSvg }, slots);
  },
});
