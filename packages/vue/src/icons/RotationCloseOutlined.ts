// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RotationCloseOutlinedSvg from '@colelab/icons-svg/es/asn/RotationCloseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RotationCloseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RotationCloseOutlinedSvg }, slots);
  },
});
