// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CompareOutlinedSvg from '@colelab/icons-svg/es/asn/CompareOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CompareOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CompareOutlinedSvg }, slots);
  },
});
