// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartWalkieTalkieOutlinedSvg from '@colelab/icons-svg/es/asn/SmartWalkieTalkieOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartWalkieTalkieOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartWalkieTalkieOutlinedSvg }, slots);
  },
});
