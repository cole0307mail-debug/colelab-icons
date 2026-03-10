// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RotationOutlinedSvg from '@colelab/icons-svg/es/asn/RotationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RotationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RotationOutlinedSvg }, slots);
  },
});
