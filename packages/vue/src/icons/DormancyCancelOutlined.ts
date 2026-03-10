// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DormancyCancelOutlinedSvg from '@colelab/icons-svg/es/asn/DormancyCancelOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DormancyCancelOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DormancyCancelOutlinedSvg }, slots);
  },
});
