// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WarningFilledSvg from '@colelab/icons-svg/es/asn/WarningFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WarningFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WarningFilledSvg }, slots);
  },
});
