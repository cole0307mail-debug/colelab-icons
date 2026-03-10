// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WarningOutlinedSvg from '@colelab/icons-svg/es/asn/WarningOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WarningOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WarningOutlinedSvg }, slots);
  },
});
