// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DormancyOutlinedSvg from '@colelab/icons-svg/es/asn/DormancyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DormancyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DormancyOutlinedSvg }, slots);
  },
});
