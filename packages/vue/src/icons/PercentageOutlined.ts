// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PercentageOutlinedSvg from '@colelab/icons-svg/es/asn/PercentageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PercentageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PercentageOutlinedSvg }, slots);
  },
});
