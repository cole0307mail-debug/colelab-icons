// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CheckCircleFilledSvg from '@colelab/icons-svg/es/asn/CheckCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CheckCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CheckCircleFilledSvg }, slots);
  },
});
