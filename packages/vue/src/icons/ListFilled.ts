// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ListFilledSvg from '@colelab/icons-svg/es/asn/ListFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ListFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ListFilledSvg }, slots);
  },
});
