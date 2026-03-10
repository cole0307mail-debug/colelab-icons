// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PauseFilledSvg from '@colelab/icons-svg/es/asn/PauseFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PauseFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PauseFilledSvg }, slots);
  },
});
