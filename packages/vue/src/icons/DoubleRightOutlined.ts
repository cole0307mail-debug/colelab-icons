// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoubleRightOutlinedSvg from '@colelab/icons-svg/es/asn/DoubleRightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoubleRightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoubleRightOutlinedSvg }, slots);
  },
});
