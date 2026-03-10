// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlgorithmOutlinedSvg from '@colelab/icons-svg/es/asn/AlgorithmOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlgorithmOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlgorithmOutlinedSvg }, slots);
  },
});
