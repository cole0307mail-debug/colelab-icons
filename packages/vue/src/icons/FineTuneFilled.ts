// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FineTuneFilledSvg from '@colelab/icons-svg/es/asn/FineTuneFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FineTuneFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FineTuneFilledSvg }, slots);
  },
});
