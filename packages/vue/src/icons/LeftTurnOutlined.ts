// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeftTurnOutlinedSvg from '@colelab/icons-svg/es/asn/LeftTurnOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeftTurnOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeftTurnOutlinedSvg }, slots);
  },
});
