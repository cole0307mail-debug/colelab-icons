// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeftCircleOutlinedSvg from '@colelab/icons-svg/es/asn/LeftCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeftCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeftCircleOutlinedSvg }, slots);
  },
});
