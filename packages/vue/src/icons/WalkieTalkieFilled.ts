// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WalkieTalkieFilledSvg from '@colelab/icons-svg/es/asn/WalkieTalkieFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WalkieTalkieFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WalkieTalkieFilledSvg }, slots);
  },
});
