// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PauseCircleFilledSvg from '@colelab/icons-svg/es/asn/PauseCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PauseCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PauseCircleFilledSvg }, slots);
  },
});
