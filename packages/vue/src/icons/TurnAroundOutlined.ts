// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TurnAroundOutlinedSvg from '@colelab/icons-svg/es/asn/TurnAroundOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TurnAroundOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TurnAroundOutlinedSvg }, slots);
  },
});
