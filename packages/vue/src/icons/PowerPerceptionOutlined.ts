// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerPerceptionOutlinedSvg from '@colelab/icons-svg/es/asn/PowerPerceptionOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerPerceptionOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerPerceptionOutlinedSvg }, slots);
  },
});
