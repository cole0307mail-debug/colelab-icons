// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PointOutlinedSvg from '@colelab/icons-svg/es/asn/PointOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PointOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PointOutlinedSvg }, slots);
  },
});
