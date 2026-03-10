// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DrawRoundOutlinedSvg from '@colelab/icons-svg/es/asn/DrawRoundOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DrawRoundOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DrawRoundOutlinedSvg }, slots);
  },
});
