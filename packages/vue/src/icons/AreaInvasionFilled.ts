// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AreaInvasionFilledSvg from '@colelab/icons-svg/es/asn/AreaInvasionFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AreaInvasionFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AreaInvasionFilledSvg }, slots);
  },
});
