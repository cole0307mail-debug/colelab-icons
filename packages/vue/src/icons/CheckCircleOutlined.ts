// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CheckCircleOutlinedSvg from '@colelab/icons-svg/es/asn/CheckCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CheckCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CheckCircleOutlinedSvg }, slots);
  },
});
