// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IdcardFilledSvg from '@colelab/icons-svg/es/asn/IdcardFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IdcardFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IdcardFilledSvg }, slots);
  },
});
