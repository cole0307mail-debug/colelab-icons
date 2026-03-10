// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlusCircleOutlinedSvg from '@colelab/icons-svg/es/asn/PlusCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlusCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlusCircleOutlinedSvg }, slots);
  },
});
