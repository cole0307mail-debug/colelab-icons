// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CopyOutlinedSvg from '@colelab/icons-svg/es/asn/CopyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CopyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CopyOutlinedSvg }, slots);
  },
});
