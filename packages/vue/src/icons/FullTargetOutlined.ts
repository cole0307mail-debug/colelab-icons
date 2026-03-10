// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FullTargetOutlinedSvg from '@colelab/icons-svg/es/asn/FullTargetOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FullTargetOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FullTargetOutlinedSvg }, slots);
  },
});
