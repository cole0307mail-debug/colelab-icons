// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PigeonholeFilledSvg from '@colelab/icons-svg/es/asn/PigeonholeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PigeonholeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PigeonholeFilledSvg }, slots);
  },
});
