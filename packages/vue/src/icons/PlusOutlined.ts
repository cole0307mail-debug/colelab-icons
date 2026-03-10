// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlusOutlinedSvg from '@colelab/icons-svg/es/asn/PlusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlusOutlinedSvg }, slots);
  },
});
