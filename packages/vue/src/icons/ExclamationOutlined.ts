// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExclamationOutlinedSvg from '@colelab/icons-svg/es/asn/ExclamationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExclamationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExclamationOutlinedSvg }, slots);
  },
});
