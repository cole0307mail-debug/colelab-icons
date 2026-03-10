// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScanCodeOutlinedSvg from '@colelab/icons-svg/es/asn/ScanCodeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScanCodeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScanCodeOutlinedSvg }, slots);
  },
});
