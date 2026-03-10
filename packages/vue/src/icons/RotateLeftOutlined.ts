// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RotateLeftOutlinedSvg from '@colelab/icons-svg/es/asn/RotateLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RotateLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RotateLeftOutlinedSvg }, slots);
  },
});
