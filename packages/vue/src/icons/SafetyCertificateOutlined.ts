// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyCertificateOutlinedSvg from '@colelab/icons-svg/es/asn/SafetyCertificateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyCertificateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyCertificateOutlinedSvg }, slots);
  },
});
