// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UnitFilledSvg from '@colelab/icons-svg/es/asn/UnitFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UnitFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UnitFilledSvg }, slots);
  },
});
