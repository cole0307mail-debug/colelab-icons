// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TurnLeftOutlinedSvg from '@colelab/icons-svg/es/asn/TurnLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TurnLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TurnLeftOutlinedSvg }, slots);
  },
});
