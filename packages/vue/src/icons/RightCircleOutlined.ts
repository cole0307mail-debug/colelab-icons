// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RightCircleOutlinedSvg from '@colelab/icons-svg/es/asn/RightCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RightCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RightCircleOutlinedSvg }, slots);
  },
});
