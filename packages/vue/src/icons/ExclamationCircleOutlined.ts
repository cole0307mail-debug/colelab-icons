// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ExclamationCircleOutlinedSvg from '@colelab/icons-svg/es/asn/ExclamationCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ExclamationCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ExclamationCircleOutlinedSvg }, slots);
  },
});
