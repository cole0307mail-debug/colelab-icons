// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PauseCircleOutlinedSvg from '@colelab/icons-svg/es/asn/PauseCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PauseCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PauseCircleOutlinedSvg }, slots);
  },
});
