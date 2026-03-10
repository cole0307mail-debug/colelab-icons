// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloseOutlinedSvg from '@colelab/icons-svg/es/asn/CloseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloseOutlinedSvg }, slots);
  },
});
