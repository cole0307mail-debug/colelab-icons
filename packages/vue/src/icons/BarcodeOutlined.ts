// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BarcodeOutlinedSvg from '@colelab/icons-svg/es/asn/BarcodeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BarcodeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BarcodeOutlinedSvg }, slots);
  },
});
