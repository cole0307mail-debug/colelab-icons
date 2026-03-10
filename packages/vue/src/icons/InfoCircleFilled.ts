// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InfoCircleFilledSvg from '@colelab/icons-svg/es/asn/InfoCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InfoCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InfoCircleFilledSvg }, slots);
  },
});
