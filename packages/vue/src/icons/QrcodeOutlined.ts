// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import QrcodeOutlinedSvg from '@colelab/icons-svg/es/asn/QrcodeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'QrcodeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: QrcodeOutlinedSvg }, slots);
  },
});
