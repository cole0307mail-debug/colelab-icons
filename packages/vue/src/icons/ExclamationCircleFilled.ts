// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExclamationCircleFilledSvg from '@colelab/icons-svg/es/asn/ExclamationCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExclamationCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExclamationCircleFilledSvg }, slots);
  },
});
