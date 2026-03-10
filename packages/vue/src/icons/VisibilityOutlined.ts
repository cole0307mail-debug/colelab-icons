// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VisibilityOutlinedSvg from '@colelab/icons-svg/es/asn/VisibilityOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VisibilityOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VisibilityOutlinedSvg }, slots);
  },
});
