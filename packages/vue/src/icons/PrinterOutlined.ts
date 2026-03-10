// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PrinterOutlinedSvg from '@colelab/icons-svg/es/asn/PrinterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PrinterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PrinterOutlinedSvg }, slots);
  },
});
