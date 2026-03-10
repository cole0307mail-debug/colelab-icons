// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FineTuneOutlinedSvg from '@colelab/icons-svg/es/asn/FineTuneOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FineTuneOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FineTuneOutlinedSvg }, slots);
  },
});
