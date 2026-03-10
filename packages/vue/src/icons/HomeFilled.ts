// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HomeFilledSvg from '@colelab/icons-svg/es/asn/HomeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HomeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HomeFilledSvg }, slots);
  },
});
