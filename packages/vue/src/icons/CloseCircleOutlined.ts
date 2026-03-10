// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloseCircleOutlinedSvg from '@colelab/icons-svg/es/asn/CloseCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloseCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloseCircleOutlinedSvg }, slots);
  },
});
