// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoubleLeftOutlinedSvg from '@colelab/icons-svg/es/asn/DoubleLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoubleLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoubleLeftOutlinedSvg }, slots);
  },
});
