// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WalkieTalkieOutlinedSvg from '@colelab/icons-svg/es/asn/WalkieTalkieOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WalkieTalkieOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WalkieTalkieOutlinedSvg }, slots);
  },
});
