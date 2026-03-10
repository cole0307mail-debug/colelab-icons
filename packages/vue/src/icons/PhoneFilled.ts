// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PhoneFilledSvg from '@colelab/icons-svg/es/asn/PhoneFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PhoneFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PhoneFilledSvg }, slots);
  },
});
