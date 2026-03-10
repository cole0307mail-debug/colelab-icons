// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyCertificateFilledSvg from '@colelab/icons-svg/es/asn/SafetyCertificateFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyCertificateFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyCertificateFilledSvg }, slots);
  },
});
