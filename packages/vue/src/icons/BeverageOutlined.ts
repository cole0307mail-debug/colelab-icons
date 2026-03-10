// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BeverageOutlinedSvg from '@colelab/icons-svg/es/asn/BeverageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BeverageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BeverageOutlinedSvg }, slots);
  },
});
