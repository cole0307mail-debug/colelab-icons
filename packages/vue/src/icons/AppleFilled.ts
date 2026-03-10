// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppleFilledSvg from '@colelab/icons-svg/es/asn/AppleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppleFilledSvg }, slots);
  },
});
