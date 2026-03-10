// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExitOutlinedSvg from '@colelab/icons-svg/es/asn/ExitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExitOutlinedSvg }, slots);
  },
});
