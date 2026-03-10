// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RightTurnOutlinedSvg from '@colelab/icons-svg/es/asn/RightTurnOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RightTurnOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RightTurnOutlinedSvg }, slots);
  },
});
