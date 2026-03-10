// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import QrcodeFilledSvg from '@colelab/icons-svg/es/asn/QrcodeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'QrcodeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: QrcodeFilledSvg }, slots);
  },
});
