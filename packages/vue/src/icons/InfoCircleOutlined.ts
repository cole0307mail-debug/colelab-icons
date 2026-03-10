// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InfoCircleOutlinedSvg from '@colelab/icons-svg/es/asn/InfoCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InfoCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InfoCircleOutlinedSvg }, slots);
  },
});
