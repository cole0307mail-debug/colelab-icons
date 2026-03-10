// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TurnRightOutlinedSvg from '@colelab/icons-svg/es/asn/TurnRightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TurnRightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TurnRightOutlinedSvg }, slots);
  },
});
